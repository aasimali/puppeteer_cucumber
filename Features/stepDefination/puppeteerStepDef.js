const { When, Then, Given, Before, After, setDefaultTimeout } = require("cucumber")
const timeOut = 60 * 1000;
const puppeteerPage = require('..//pages/puppeteerPage')

setDefaultTimeout(timeOut)

Before(async function () {
    return await puppeteerPage.launchBrowser()
})

After(async function () {
    return await puppeteerPage.closeBrowser()
})

Given(/^Open "([^"]*)" website$/, async function (url) {
    return await puppeteerPage.openWebUrl(url)
})

When(/^User click on "([^"]*)" button$/, async function (button) {
    return await puppeteerPage.clickOnButton(button)
})

Then(/^Verify that User is redirected to the "([^"]*)" page$/, async function (pageName) {
    return await puppeteerPage.verifyPage(pageName)
})