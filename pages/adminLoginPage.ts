import {Page, Locator} from '@playwright/test';

export class AdminLoginPage{

    private readonly page:Page;
    private readonly username:Locator;
    private readonly password:Locator;
    private readonly loginButton:Locator;
    private readonly popUpClose:Locator;

    constructor(page: Page){
        this.page= page;
        this.username = page.getByLabel('Username');
        this.password = page.getByLabel('Password');
        this.loginButton = page.getByRole('button',{name : ' Login'});
        this.popUpClose = page.locator('button[class="btn-close"]');
    }

    async adminLogin(username: string, password: string){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async closePopUp(): Promise<void> {
        await this.popUpClose.waitFor({state : 'visible',timeout : 15000});
        await this.popUpClose.click();
    }

}