const puppeteer = require("puppeteer")
const browserConf = require('../../TestData/browserConf.js')
const expect = require("chai").expect
const testData = require('../../TestData/testData.json')
const locators = require('../../Locators/locators.json')
const timeOut = 30 * 1000;


let puppeteerFn = function () {

    /*************************************** This method launch the browser **********************************************/
    this.launchBrowser = async function () {
        this.browser = await puppeteer.launch(browserConf)
        const pages = await this.browser.pages()
        this.page = pages[0]
        await this.page.setDefaultTimeout(timeOut)
        await this.page.setDefaultNavigationTimeout(timeOut)
    }

    /*************************************** This method close the browser ***********************************************/
    this.closeBrowser = async function () {
        await this.browser.close()
    }

    /*************************************** This method call the Url ****************************************************/
    this.openWebUrl = async function (url) {

        /* This piece of code will choose the website url based on the parameter passed in gherkin*/
        switch (url) {
            case 'Puppeteer':
                url = testData.Urls.puppeteer;
                break

            case 'Protractor':
                url = testData.Urls.Protractor;
                break

            case 'Osians':
                url = testData.Urls.Osians;
                break

            default:
                console.log('No match')
        }

        /* This piece of code will call the website and handle the exception, if fails*/
        try {
            var res = await this.page.goto(url, { waitUntil: 'networkidle2', })
            var browserUrl = await this.page.url()
        }
        catch (error) {
            console.log("website can't be launched due to: " + error)
        }

        /* This piece of code will perform the assertion and handle the exception, if fails*/
        expect(res._status).to.equals(200)
        expect(res._url).to.equals(url) //through response
        expect(browserUrl).to.equals(url) //double check, through browser url
    }

    /*************************************** This method click the button ************************************************/
    this.clickOnButton = async function (button) {
        var locator, type
        /* This piece of code will choose the button locator based on the parameter passed in gherkin*/
        switch (button) {
            case 'Run Checks':
                locator = locators.runchecks.locator
                type = locators.runchecks.locatorType
                break

            case 'Auction':
                locator = locators.auction.locator
                type = locators.auction.locatorType
                break

            default:
                console.log('No match')
        }

        /* This piece of code will check the locator type and then will wait dynamically for that locator to be appeared in the DOM */
        if (type === 'xpath') {
            await this.page.waitForXPath(locator)
            let elements = await this.page.$x(locator)
            button = elements[0]
        }
        else {
            await this.page.waitForSelector(locator)
            button = await this.page.$(locator)
        }

        /* This piece of code will click on the button and handle the exception, if fails*/
        try {
            await button.click()
        }
        catch (error) {
            console.log("button can't be clicked due to: " + error)
        }
    }

    /*************************************** This method verify the page title *******************************************/
    this.verifyPage = async function (pageName) {
        var expectedTitle, actualTitle, locator, type

        /* This piece of code will choose the expected title based on the parameter passed in gherkin*/
        switch (pageName) {
            case 'GitHub':
                locator = locators.gitHubNextPage.locator
                type = locators.gitHubNextPage.locatorType
                expectedTitle = testData.PageTitle.GitHub_puppetter_title
                break

            case 'Auction':
                locator = locators.carousel.locator
                type = locators.carousel.locatorType
                expectedTitle = testData.PageTitle.Auction
                break

            default:
                console.log('No match')
        }

        /* This piece of code will check the locator type and then will wait dynamically for that locator to be appeared in the DOM */
        if (type === 'xpath') {
            await this.page.waitForXPath(locator)
        }
        else {
            await this.page.waitForSelector(locator)
        }

        /* This piece of code will get the browser title and handle the exception, if fails*/
        try {
            actualTitle = await this.page.title()
        }
        catch (error) {
            console.log("page title can't be verified due to: " + error)
        }

        /* This line of code will perform assertion and handle the exception, if fails*/
        expect(expectedTitle).to.equals(actualTitle)
    }
}
module.exports = new puppeteerFn;