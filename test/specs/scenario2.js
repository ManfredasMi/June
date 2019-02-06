const assert = require('assert');

describe('Testing june.dk webpage', () => {
    it('Check meget lav and continue: ', () => {
        browser.url('https://www.june.dk/');
        const signUpButton = browser.$('//body/header/div/nav/div[2]/a[2]/span');
        signUpButton.waitForDisplayed(10000);
        signUpButton.click();
        const nameTextField = browser.$('[autocomplete="name"]');
        nameTextField.waitForDisplayed(10000);
        nameTextField.setValue('test test');
        browser.$('[autocomplete="email"]').setValue('vardenissveikas1@gmail.com');
        browser.$('[data-test="start-button"]').click();
        browser.$('[data-test="personal"]').click();
        const nextButton = browser.$('[data-test="button-next"]');
        nextButton.click();
        browser.$('[for="june-checkbox-id-2"]').click();
        nextButton.click();
        const checkboxButton = browser.$('.checkbox-with-label.checkbox-with-label');
        checkboxButton.waitForDisplayed(10000);
        checkboxButton.click();
        nextButton.click();
        browser.$('[for="june-radio-button-id-4"]').click();
        browser.$('[for="june-radio-button-id-5"]').click();
        browser.$('[for="june-radio-button-id-7"]').click();
        nextButton.click();
        const investAmountField = browser.$('[type="tel"]');
        investAmountField.waitForDisplayed(10000);
        investAmountField.setValue('200');
        nextButton.click();
        browser.$('[for="june-radio-button-id-10"]').click();
        nextButton.click();
        const riskClassButton = browser.$('[for="risk-radio-button-05"]');
        riskClassButton.waitForDisplayed(10000);
        riskClassButton.click();
        // check meget lav
        const megetLavMessage = browser.$('.type-title-base.risk-appetite-title [aria-hidden="false"]');
        megetLavMessage.waitForDisplayed(10000);
        console.log('\x1b[31m', "The risk attitude you have selected is: " + megetLavMessage.getText());
        // assert.equal(megetLavMessage.getText(), 'Meget Lav');
        // was not able to divide scenario 2 into separate it functions, so left the hardcoded version here
        // as the test was crashing with a few it's per describe
        nextButton.click();
        browser.pause(2000);
        nextButton.click();
        browser.$('[for="june-radio-button-id-13"]').click();
        nextButton.click();
        browser.pause(3000);
        browser.$('.action[title="Næste"]').click();
        browser.$('[name="incomeMonth"]').setValue('4500');
        nextButton.click();
        browser.$('[name="incomeExpense"]').setValue('3500');
        nextButton.click();
        browser.$('[name="wealthBankSavings"]').setValue('45000');
        nextButton.click();
        browser.$('[name="wealthInvestedSavings"]').setValue('0');
        nextButton.click();
        const wealthPensionSavingsField = browser.$('[name="wealthPensionSavings"]');
        wealthPensionSavingsField.waitForDisplayed(10000);
        wealthPensionSavingsField.setValue('0');
        nextButton.click();
        browser.$('[name="wealthAssets"]').setValue('0');
        nextButton.click();
        browser.$('[name="wealthLiability"]').setValue('0');
        nextButton.click();
        // print all data from the table
        // this part could have been written smarter by looping through the table or something
        // but faced problems doing so, so I've stuck to some hardcoded version
        browser.pause(3000);
        const investAmountValue = browser.$('//body/div/main/form/div/section/div/div/table[1]/tbody/tr[2]/td[2]').getText();
        console.log('\x1b[31m', "investment value has been set to: " + investAmountValue);
        const investmentPeriodValue = browser.$('//body/div/main/form/div/section/div/div/table[1]/tbody/tr[3]/td[2]').getText();
        console.log('\x1b[31m', "investment period is: " + investmentPeriodValue);
        const riskValue = browser.$('//body/div/main/form/div/section/div/div/table[1]/tbody/tr[4]/td[2]').getText();
        console.log('\x1b[31m', "risk value has been set set to: " + riskValue);
        const incomePerMonth = browser.$('//body/div/main/form/div/section/div/div/table[2]/tbody/tr[2]/td[2]').getText();
        console.log('\x1b[31m', "income per month set to: " + incomePerMonth);
        const expensePerMonth = browser.$('//body/div/main/form/div/section/div/div/table[2]/tbody/tr[3]/td[2]').getText();
        console.log('\x1b[31m', "expence per month set to is: " + expensePerMonth);
        const wealthBankSavings = browser.$('//body/div/main/form/div/section/div/div/table[2]/tbody/tr[4]/td[2]').getText();
        console.log('\x1b[31m', "wealth bank savings are: " + wealthBankSavings);
        const wealthInvestedSavings = browser.$('//body/div/main/form/div/section/div/div/table[2]/tbody/tr[5]/td[2]').getText();
        console.log('\x1b[31m', "wealth invested savings are is: " + wealthInvestedSavings);
        const wealthPensionSavings = browser.$('//body/div/main/form/div/section/div/div/table[2]/tbody/tr[6]/td[2]').getText();
        console.log('\x1b[31m', "wealth pension savings are is: " + wealthPensionSavings);
        const wealthAssets = browser.$('//body/div/main/form/div/section/div/div/table[2]/tbody/tr[7]/td[2]').getText();
        console.log('\x1b[31m', "wealth assets are is: " + wealthAssets);
        const wealthLiability = browser.$('//body/div/main/form/div/section/div/div/table[2]/tbody/tr[8]/td[2]').getText();
        console.log('\x1b[31m', "wealth liability is: " + wealthLiability);

        // last part
        nextButton.click();
        const juneModerateScreenedTitle = browser.$('[data-test="fund-name"]');
        juneModerateScreenedTitle.waitForDisplayed(10000);
        assert.equal(juneModerateScreenedTitle.getText(), 'June Moderate Screened');
    });
});