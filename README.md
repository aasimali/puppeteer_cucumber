# puppeteer_cucumber
1. Clone this Repo 
2. Go to puppeteer_cucumber folder
3. Open terminal from the same location
4. Type npm run test
5. This command will install all the dependencies and will also download chromium and then it will launch the test cases

# Folder Structure
Point 1: Feature folder contains features, stepdefination and pages sub folder, under each sub folder we have relevent files
Point 1.1: Feature > feature > Puppeteer.feature: This file tells us what is being automated in plain english language
Point 1.2: Feature > stepDefination > puppeteerStepDef.js: This file has all the step definations
Point 1.3: Feature > pages > puppeteerPage.js: This file has implementation of all the methods

Point 2: From Locators folder, in locator.json, you can change locator anytime
Point 3: Reports folder contains the report.js file which generates the html report post successful execution
Point 4: From testData folder, in testData.json, you can change the test data anytime
Point 5: From testData folder, in browserConf.js, you can change browser configuration anytime.

This is a puppeteer cucumber framework, to know more connect to https://www.linkedin.com/in/aasim-anwar/
