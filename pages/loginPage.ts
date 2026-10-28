import {Page,Locator} from '@playwright/test';

export class LoginPage{
    private readonly page: Page;

    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton:Locator;
    private readonly loginheader: Locator;

    constructor(page: Page){
        this.page = page;
        this.emailInput = page.getByPlaceholder('E-Mail Address');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button',{ name : 'Login'});
        this.loginheader = page.getByRole('heading',{name : 'Returning Customer'});
    }

    async isLoginPageExists(){
        try {
            await this.loginheader.waitFor({
                state: 'visible',
                timeout: 15000,
            });
            return true
        }catch (error) {
            console.log(`Error checking loginp page header visibility: ${error}`);
            return false;
        }
    }

    async login(email: string, password: string){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }


}