const assert = require('assert');

describe('Testing june.dk webpage', () => {
    // it('should not be able to sign up with the same email twice', () => {
    //     browser.url('https://www.june.dk/');
    //     const signUpButton = browser.$('//body/header/div/nav/div[2]/a[2]/span');
    //     signUpButton.waitForDisplayed(10000);
    //     signUpButton.click();
    //     browser.$('[autocomplete="name"]').setValue('test test');
    //     browser.$('[autocomplete="email"]').setValue('vardenissd@gmail.com');
    //     browser.$('[data-test="start-button"]').click();
    //     browser.pause(3000);
    //     const errorMessage = browser.$('.error-container.l-text-secondary').getText();
    //     // const errorMessage = browser.$('.error-container.l-text-secondary');
    //     // errorMessage.waitForDisplayed(10000);
    //     // errorMessage.getText();
    //     assert.equal(errorMessage, 'Der er allerede en bruger registreret med denne mail. Vi sender et link til din mail om lidt, som du kan bruge til at logge ind med.');
    //  });

       it('should be able to get “June Moderate Screened” fund recommendation with following inputs: ', () => {
          browser.url('https://www.june.dk/');
          const signUpButton = browser.$('//body/header/div/nav/div[2]/a[2]/span');
          signUpButton.waitForDisplayed(10000);
          signUpButton.click();
          browser.$('[autocomplete="name"]').setValue('test test');
          browser.$('[autocomplete="email"]').setValue('vardenissd100@gmail.com');
          browser.$('[data-test="start-button"]').click();
          browser.$('[data-test="personal"]').click();
          browser.$('[data-test="button-next"]').click();
          browser.$('[for="june-checkbox-id-2"]').click();
          browser.$('[data-test="button-next"]').click();
          browser.$('.checkbox-with-label.checkbox-with-label--dark').click();
          browser.$('[data-test="button-next"]').click();
          browser.$('[for="june-checkbox-id-3"]').click();
          browser.$('[data-test="button-next"]').click();
          browser.$('[for="june-radio-button-id-4"]').click();
          browser.$('[for="june-radio-button-id-5"]').click();
          browser.$('[for="june-radio-button-id-7"]').click();
          browser.$('[data-test="button-next"]').click();
          browser.$('[type="tel"]').setValue('200');
          browser.$('[data-test="button-next"]').click();
          browser.$('[for="june-radio-button-id-10"]').click();
          browser.$('[data-test="button-next"]').click();
          browser.$('[for="risk-radio-button-05"]').click();
          // check meget lav
          browser.pause(3000);
          const megetLavMessage = browser.$('.type-title-base.risk-appetite-title [aria-hidden="false"]').getText();
          if (megetLavMessage === 'Meget Lav') {
            console.log('Check Passed');
          } else {
            console.log('Check Failed');
          };
          browser.$('[data-test="button-next"]').click();
          browser.pause(2000);
          browser.$('[data-test="button-next"]').click();
          browser.$('[for="june-radio-button-id-13"]').click();
          browser.$('[data-test="button-next"]').click();
          browser.pause(3000);
          browser.$('.action[title="Næste"]').click();
          browser.$('[name="incomeMonth"]').setValue('4500');
          browser.$('[data-test="button-next"]').click();
          browser.$('[name="incomeExpense"]').setValue('3500');
          browser.$('[data-test="button-next"]').click();
          browser.$('[name="wealthBankSavings"]').setValue('45000');
          browser.$('[data-test="button-next"]').click();
          browser.$('[name="wealthInvestedSavings"]').setValue('0');
          browser.$('[data-test="button-next"]').click();
          browser.$('[name="wealthPensionSavings"]').setValue('0');
          browser.$('[data-test="button-next"]').click();
          browser.$('[name="wealthAssets"]').setValue('0');
          browser.$('[data-test="button-next"]').click();
          browser.$('[name="wealthLiability"]').setValue('0');
          browser.$('[data-test="button-next"]').click();
          // print all data from the table
          browser.pause(3000);
          const investAmountValue = browser.$('//body/div/main/form/div/section/div/div/table[1]/tbody/tr[2]/td[2]').getText();
          console.log('\x1b[32m', "investment value has been set to: " + investAmountValue);
          const investmentPeriodValue = browser.$('//body/div/main/form/div/section/div/div/table[1]/tbody/tr[3]/td[2]').getText();
          console.log('\x1b[32m', "investment period is: " + investmentPeriodValue);
          browser.$('[data-test="button-next"]').click();
          const juneModerateScreenedTitle = browser.$('[data-test="fund-name"]').getText();
          console.log('\x1b[32m', "test results: " + juneModerateScreenedTitle);
          browser.pause(3000);
      });
});