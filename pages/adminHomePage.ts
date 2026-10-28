import {Page, Locator} from '@playwright/test';

export class AdminHomePage{

    private readonly page:Page;
    private readonly customerMenu:Locator;
    private readonly customerNavigator:Locator;

    constructor(page: Page){
        this.page= page;
        this.customerMenu = page.locator('#menu-customer');
        this.customerNavigator = page.getByRole('link', { name: 'Customers' });
    }

    async navigateToCustomers(){
        await this.customerMenu.waitFor({ state: 'visible', timeout: 10000});
        await this.customerMenu.click();
         await this.customerNavigator.waitFor({ state: 'visible', timeout: 20000});
        await this.customerNavigator.click();
    }

    
}