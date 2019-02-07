const assert = require('assert');

describe("To test danske bank page", function () {
  it("Checking if user successfully logged in: ", function () {
    let wait = 5000;
    browser.url('https://danskebank.dk/privat');
    const okButton = browser.$('=OK');
    okButton.waitForDisplayed(wait);
    okButton.click();
    browser.$('=Login').click();
    const usernameBox = browser.$('=username49');
    usernameBox.waitForDisplayed(wait);
    usernameBox.setValue('Test');
    const passwordBox = browser.$('=password49');
    passwordBox.clearValue();
    passwordBox.setValue('Test');
    const title = browser.getTitle()
    assert.equal(title, 'Logged');
  });

  it("Checking if user successfully logged in:", function () {
    let wait = 5000;
    browser.url('https://danskebank.dk/privat');
    const okButton = browser.$('=OK');
    okButton.waitForDisplayed(wait);
    okButton.click();
    browser.$('=Login').click();
    const usernameBox = browser.$('=username49');
    usernameBox.waitForDisplayed(wait);
    usernameBox.clearValue();
    usernameBox.setValue('Test');
    const passwordBox = browser.$('=password49');
    passwordBox.waitForDisplayed(wait);
    passwordBox.clearValue();
    passwordBox.setValue('Test');
    browser.$('=Sign').click();
    const title = browser.getTitle()
    assert.equal(title, 'Logged');
  });

  it("Navigate to my accounts:", function () {
    // navigate to my accounts
    const accounts = browser.$('=accounts');
    accounts.waitForDisplayed(10000);
    accounts.click();
    // navigated, now you have to expect something to validate the test
    const accountName = browser.$('=account49');
    assert.equal(accountName.getText(), 'Test Test');
  });
});