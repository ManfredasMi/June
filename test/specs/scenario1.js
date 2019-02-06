const assert = require('assert');

describe('Testing june.dk webpage', () => {
  it('should not be able to sign up with the same email twice', () => {
    browser.url('https://www.june.dk/');
    const signUpButton = browser.$('//body/header/div/nav/div[2]/a[2]/span');
    signUpButton.waitForDisplayed(10000);
    signUpButton.click();
    const nameTextField = browser.$('[autocomplete="name"]');
    nameTextField.waitForDisplayed(10000);
    nameTextField.setValue('test test');
    browser.$('[autocomplete="email"]').setValue('vardenissd@gmail.com');
    browser.$('[data-test="start-button"]').click();
    const errorMessage = browser.$('.error-container.l-text-secondary');
    errorMessage.waitForDisplayed(10000);
    assert.equal(errorMessage.getText(), 'Der er allerede en bruger registreret med denne mail. Vi sender et link til din mail om lidt, som du kan bruge til at logge ind med.');
  });
});