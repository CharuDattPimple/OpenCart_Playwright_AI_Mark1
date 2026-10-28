import {test, expect} from '../../fixtures/pageFixtures';
import { DataGenerator } from '../../utils/dataGenerator';

test('User registration test @master',async ({registerPage,homePage,sucessPage,myAccountPage})=>{
    const firstName : string = DataGenerator.getFirstName();
    const lastName : string  = DataGenerator.getLastName();
    const email : string  = DataGenerator.getEmail();
    const password : any = DataGenerator.getPassword();
    const telephone = DataGenerator.getPhoneNumber();
    
    await test.step('1) User Opens the application', async () => {
        await homePage.navigateTo(process.env.WEB_APP_URL || 'http://localhost/opencart/upload/');
    });

    await test.step('2) User navigates to my Account -> Register page', async () => {
        await homePage.clickMyAccount();
        await homePage.clickRegister();
    });

    await test.step('3) Verify that the register page is displayed', async () => {
        const isRegisterPage : boolean  = await registerPage.isRegisterPageExists();
        expect(isRegisterPage).toBeTruthy();
    });

    await test.step('4) User fills the registration form', async () => {
          await registerPage.completeRegistration(firstName, lastName, email, telephone, password);
    })

    await test.step('5) Verify that the user is registered successfully', async () => {
        // await expect(sucessPage.getCurrentUrl()).resolves.toMatch(/route=account\/success/);
        const isSuccess : boolean  = await sucessPage.isSucccessPageExists();
        expect(isSuccess).toBeTruthy();
        
    })

    await test.step('6) Verify the account-created confirmation message', async () => {
        const successMessage : string | null = await sucessPage.getSuccessMessage();
        expect(successMessage).toContain('Your Account Has Been Created!');
    })

    await test.step('7) Verify the account is accessible', async () => {
        await sucessPage.clickContinueButton();
        const isMyAccount : boolean  = await myAccountPage.isMyaccountPageExists();
        expect(isMyAccount).toBeTruthy();
    })

    console.log(`User Registration Test completed successfully for user: ${firstName} ${lastName} with email: ${email}`);

});