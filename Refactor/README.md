# wm-qa-auto-exercise
Danske Bank Wealth Management IT quality assurance/automation specialist hire exercise

Please implement scenarios using the following requirements. We will be looking at architecture, style and technique.
Tasks order is up to you. Not finished task is also a result. Should not take > 1 week to finish.

## Getting started

Please make sure the example test succeeds before starting. Ping us if it does not!

You can see the steps for running the tests in the 'How should the tests run?' section.


## Implementation stack:
* [Webdriverio](http://webdriver.io/)

* [Selenium Standalone](https://github.com/vvo/selenium-standalone)

* [Mocha](https://mochajs.org/)

* [Chai](https://www.chaijs.com/api/bdd/)


## How should the tests run?
We expect the tests to be run the following way
```
cd yourRepoName/
npm install
npm test
```

## What environments?

[JUNE] => Tests are expected to run in chrome against our production site at june.dk


## [JUNE] What should be tested?

Test sign up flow in June.dk application. Sign up flow starts by clicking “Kom I gang” from main page;

### Test user:
Use user only with first and last name 'Test', email could be different.

```
## First challenge: create test case and automate

User Story 1 - As a user I cannot sign up to june.dk with same email twice
Please write manual test case and automate it.
```

```
## Second challenge: automate test case

Scenario 2 - User should be able to get “June Moderate Screened” fund recommendation with following inputs:
Step 1 - Go to June.dk
Step 2 - Click on Kom i gang
Step 3 - Set email and name
Step 4 - Click on start button
Step 5 - Select Min prive opsparing as product type and continue
Step 6 - Accept some terms and answer some questions
Step 7 - Set invest amount => 200 kr and continue
Step 8 - Set time Horizon => 3 - 7 år and continue
Step 9 - Set risk attitude => 1 and check Meget lav and continue
Step 10 - Select Yes in goverment subsidies page and accept it
Step 11 - Set income month => 4500 and continue
Step 12 - Set expense month => 1000 and continue
Step 13 - Set Wealth Bank Savings => 45000 and continue
Step 14 - Set Wealth Invested Savings => 0 and continue
Step 15 - Set Wealth Pension Savings => 0 and continue
Step 16 - Set Wealth Assets => 0 and continue
Step 17 - Set Wealth Liability => 0 and continue
Step 18 - Check values are reflected in summary page correctly and continue
Step 19 - Check recommended fund name is June Moderate Screened
```
```
## Third challenge: write manual test case.

Based on Scenario 2, write few manual test cases for testing critical recommendation flow parts.
```
```
## Fourth challenge: refactor an automated script.

Script is located here ./src/specs/testCaseToRefactor.spec.js

p.s. script is based on pseudocode and should not work
```
## Feedback
Feel free to let us know what you thought of the challenge!

## Terms
Challenge exercise is for selected candidates only. Making, distributing or retaining any copies of it is prohibited.