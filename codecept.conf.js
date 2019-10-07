exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://applitools.com/helloworld',
      browser: 'chrome',
      desiredCapabilities: {
        chromeOptions: {
          args: [ '--headless', '--disable-extensions', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage']
        }
      },
      windowSize: '1920x600',
      smartWait: 5000,
      timeouts: {
        'script': 60000,
        'page load': 10000
      },
    },
    ApplitoolsHelper: {
      require: 'codeceptjs-applitoolshelper',
      applitoolsKey: 'my_api_key'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'applitools-example'
}