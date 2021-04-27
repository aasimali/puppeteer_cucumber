var browserConf =
{
    headless: true, //make it false it, if you want to see the execution in browser
    slowMo: 0,
    defaultViewport: null,
    devtools: false,
    timeout: 0, //default 30000 (30 seconds). Pass 0 to disable timeout.
    args: [
        '--start-maximized',
        '--start-in-incognito',
        // '--start-fullscreen'
    ],
    // executablePath: 'C:/BrowserDrivers/chromedriver.exe'  
}

module.exports = browserConf;