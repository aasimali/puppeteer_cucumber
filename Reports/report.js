const reporter = require("cucumber-html-reporter")
const options = {
     theme: 'bootstrap',
     jsonFile: 'Reports/cucumber-report.json',
     output: 'Reports\\cucumber-report.html',
     screenshotsDirectory: 'Reports\\screenshots',
     storeScreenshots: true,
     reportSuiteAsScenaros: true,
     launchReport: true,
     name: "Puppeteer Cucumber Report",
     brandTitle: "Regression Test Report",
     metadata: {
          "App Version": "00.00.01",
          "Test Environment": "STAGING",
          "Browser": "Chromium Version 90.0.4427.0",
          "Platform": "Windows 10",
          "Parallel": "Scenarios",
          "Executed": "Remote",
     }
}
reporter.generate(options)