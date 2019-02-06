0. scenario2.js in line 12 change the email value to an unused email if it has been used previously
1. First: npm install chromedriver -g 
2. There is a wdio.conf.js file in which you can specify scenario1.js or scenario2.js to be run as an automated test. This is specified under specs: [] object. scenario1.js set up by default. 
You can run all of the tests by:
    specs: [
        './test/specs/**/*.js'
    ],
3. Launch geckodriver in cmd: chromedriver --port=4444 --url-base=/wd/hub --verbose
4. Open one more cmd window and run the wdio test config file (cd into test folder): .\node_modules\.bin\wdio wdio.conf