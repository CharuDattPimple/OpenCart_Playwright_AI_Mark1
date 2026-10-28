import {Page,Locator} from '@playwright/test';

export class HomePage {
    
    private readonly page: Page;
    //locators
    private readonly myAccountLink: Locator;
    private readonly registerLink: Locator;
    private readonly loginLink: Locator;
    private readonly searchInput: Locator;
    private readonly searchButton: Locator;
    private readonly shoppingCartTab: Locator;
    private readonly opencartLogo : Locator;

    constructor(page: Page){
        this.page= page;
        //Initialize locator
        this.myAccountLink = page.getByRole('link', { name: ' My Account' })
        this.registerLink =page.getByRole('link', { name: 'Register' });
        this.loginLink = page.getByRole('link', { name : 'Login'}).first();
        this.searchInput = page.getByPlaceholder('Search');
        // this.searchButton =page.getByRole('button').filter({ hasText: /^$/ });
        this.searchButton =page.locator('#search span button');
        this.shoppingCartTab = page.getByTitle('Shopping Cart');
        this.opencartLogo = page.getByAltText('TheTestingAcademy eCommerce');

    }

    async navigateTo(url: string): Promise<void>{
        await this.page.goto(url);
    }
    async clickMyAccount(){
    await this.myAccountLink.click();
    }
    async clickRegister(){
        await this.registerLink.click();
        await this.page.waitForLoadState('networkidle'); // Wait for the page to load completely
    }
    async clickLogin(){
        await this.loginLink.click();
        await this.page.waitForLoadState('networkidle');
    }

    async searchProduct(productName : string) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }

    async clickShoppingCartTab() :Promise<void> {
        
        await this.shoppingCartTab.click();
        // await this.page.waitForLoadState('networkidle');
    }

   async  navigateToDashboard() {
        await this.opencartLogo.click();
    }
}