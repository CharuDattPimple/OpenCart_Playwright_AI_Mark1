import {Page,Locator} from '@playwright/test';

export class RegisterPage {

    private readonly page: Page;

    //locators
    private readonly registerPageHeader: Locator;
    private readonly firstNameInput: Locator
    private readonly lastNameInput: Locator;
    private readonly emailInput: Locator
    private readonly passwordInput: Locator;
    private readonly privacyPolicyToggle: Locator;
    private readonly continueButton: Locator;
    private readonly telephoneInput: Locator;
    private readonly passwordConfirmInput: Locator;

    constructor(page: Page) {
        this.page = page;
        //Inititalizing locators
        this.registerPageHeader = page.locator('#content h1').filter({ hasText: 'Register Account' });
        this.firstNameInput = page.locator('#input-firstname');
        this.lastNameInput =page.locator('#input-lastname');
        this.emailInput =page.locator('#input-email');
        this.telephoneInput = page.locator('#input-telephone');
        this.passwordConfirmInput = page.locator('#input-confirm');
        this.passwordInput=page.locator('#input-password');
        this.privacyPolicyToggle = page.locator("input[name='agree']");
        this.continueButton = page.locator(".btn-primary").filter({hasText: 'Continue'});
    }
    
    async isRegisterPageExists(): Promise<boolean> {
        try {
            return await this.registerPageHeader.isVisible();
        }
        catch (error) {
            console.error('Error checking register page header visibility:', error);
            return false;
        }
    }

    async completeRegistration(firstName: string, lastName: string, email: string, telephone : string ,password: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.telephoneInput.fill(telephone);
        await this.passwordInput.fill(password);
         await this.passwordConfirmInput.fill(password);
        await this.privacyPolicyToggle.check();
        await this.continueButton.click();

        

    }
}