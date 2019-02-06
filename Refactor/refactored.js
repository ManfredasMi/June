const assert = require('assert');

describe("To test danske bank page", function () {
  it("Checking if user successfully logged in: ", function () {
    let wait = 5000;
    browser.url('https://danskebank.dk/privat');
    const okButton = browser.$('=OK');
    okButton.waitForExist(wait);
    okButton.click();
    browser.$('=Login').click();
    const usernameBox = browser.$('=username49');
    usernameBox.waitForExist(wait);
    usernameBox.setValue('Test');
    const passwordBox = browser.$('=password49');
    passwordBox.clearValue();
    passwordBox.setValue('Test');
    const title = browser.getTitle()
    assert.equal(title, 'Logged');
  });

  // this part left

  it("Testcase 2", function () {
    let wait = 5000;
    browser.url('https://danskebank.dk/privat');
    browser.pause(5000);
    browser.waitForElement('=OK');
    browser.click('=OK');
    browser.click('=Login');
    browser.waitForElementPresent('=username', wait);
    browser.clearValue('=username49');
    browser.setValue('=username49', 'Test');
    browser.waitForElementVisible('=password', wait);
    browser.clearValue('=password49');
    browser.setValue('=password49', 'Test');
    browser.click('=Sign');
    browser.pause(5000);
    if (browser.getTitle == 'Logged') {
      console.log('User logged')
    } else if (browser.getTitle != 'Logged') {
      console.log('User not logged')
    }

    // navigate to my accounts
    if (browser.element('=accounts').isExisting() = true) {
      browser.element('=accounts').click()
    }
    browser.waitForElementPresent('=accounts');
    Helper.GetAccounts().then(size
      if (size > 0) {
        console.log('Accounts exist')
      });


  });
});