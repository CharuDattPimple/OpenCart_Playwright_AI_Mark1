import {Page, Locator} from "@playwright/test";

export class MyAccountPage {

    private readonly page: Page;

    private readonly myAccountHeader : Locator;
    private readonly logoutLink :Locator;
    private readonly accountLogoutHeader: Locator;

    constructor(page: Page){
        this.page = page;

        this.myAccountHeader = page.locator('#content').getByRole('heading', { name: 'My Account' });
        this.logoutLink = page.getByRole('link', {name: 'Logout'});
        this.accountLogoutHeader = page.getByRole('heading', { name: 'Account Logout' });

    }

    async isMyaccountPageExists(){
        try{
         await this.myAccountHeader.waitFor({
            state: 'visible',
            timeout: 15000,
         })
         return true;
        }catch(error){
            console.log('Error checking My Account Page :', error);
            return false;
        }
    }

    async isAccountLogoutLinkExists():Promise<boolean>{
        try{
             await this.logoutLink.waitFor({
                state: 'visible',
                timeout: 10000,
            })
            return true;
        }catch(error){
            console.log('Error checking my account logout link :', error);
        return false;
    }
    }

    async clickLogout() {
        await this.logoutLink.click();
    }

    async isLogoutSuccess(){
        try{
         await this.accountLogoutHeader.waitFor({
            state: 'visible',
            timeout: 15000,
         })
         return true;
        }catch(error){
            console.log('Error checking Logout :', error);
            return false;
        }
    }

}

