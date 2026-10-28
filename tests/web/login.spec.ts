import {test,expect} from '../../fixtures/pageFixtures';


test('Login Test with valid credentials @master',async ({homePage, loginPage,myAccountPage})=>{
    const email : any  = process.env.APP_EMAIL;
    const password: any = process.env.APP_PASSWORD;

    await test.step('1) User opens the application',async ()=> {
        await homePage.navigateTo(process.env.WEB_APP_URL || 'http://localhost/opencart/upload/');
    })
    await test.step('2) Navigates to My Account -> Login Page',async ()=> {
        await homePage.clickMyAccount();
        await homePage.clickLogin();
    })
    await test.step('3) Verify Login Page is displayed',async ()=> {
        const isloginPage: boolean = await loginPage.isLoginPageExists();
        expect(isloginPage).toBeTruthy();
    })
    await test.step('4) User enters valid credntials and submmit',async ()=> {
        await loginPage.login(email,password);
    })
    await test.step('5) Verify successfull login',async ()=> {
        const isMyAccount : boolean  = await myAccountPage.isMyaccountPageExists();
        expect(isMyAccount).toBeTruthy();

    })
    await test.step('6) Verify the user is on My Account Page',async ()=> {
        const isAuth : boolean = await myAccountPage.isAccountLogoutLinkExists();
        expect(isAuth).toBeTruthy();

    })
    console.log('Login Test completed successfully for user: ', email);
})
