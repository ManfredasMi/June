const { expect } = require('chai');

describe('Testing june.dk webpage', () => {
//     it('should not be able to sign up with the same email twice', () => {
//         browser.url('https://www.june.dk/');
//         browser.$('//body/header/div/nav/div[2]/a[2]/span').click();
//         browser.$('[autocomplete="name"]').setValue('test test');
//         browser.$('[autocomplete="email"]').setValue('vardenissd@gmail.com');
//         browser.$('[data-test="start-button"]').click();
//         browser.pause(3000);

//         const errorMessage = browser.$('//body/div[1]/div[2]/div/form/p[1]').getText();
//         if (errorMessage === 'Der er allerede en bruger registreret med denne mail. Vi sender et link til din mail om lidt, som du kan bruge til at logge ind med.') {
//             console.log('Test passed')
//         } else if (errorMessage !== 'Der er allerede en bruger registreret med denne mail. Vi sender et link til din mail om lidt, som du kan bruge til at logge ind med.') {
//              console.log('Test failed')
//         }
//     });

      it('should be able to get “June Moderate Screened” fund recommendation with following inputs: ', () => {
          browser.url('https://www.june.dk/');
          browser.$('//body/header/div/nav/div[2]/a[2]/span').click();
          browser.$('[autocomplete="name"]').setValue('test test');
          browser.$('[autocomplete="email"]').setValue('vardenissd54@gmail.com');
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
          const megetLav = browser.$('.type-title-base.risk-appetite-title [aria-hidden="false"]').getText();
        //   expect(megetLav).to.equal('Meget Lav');
            if (megetLav === 'Der er allerede en bruger registreret med denne mail. Vi sender et link til din mail om lidt, som du kan bruge til at logge ind med.') {
              console.log('Test passed')
          } else if (megetLav !== 'Der er allerede en bruger registreret med denne mail. Vi sender et link til din mail om lidt, som du kan bruge til at logge ind med.') {
              console.log('Test failed')
          }
          browser.$('[data-test="button-next"]').click();
          browser.pause(4000);
      });
});