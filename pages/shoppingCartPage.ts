import {Page, Locator} from '@playwright/test';

export class ShoppingCartPage{
    private readonly page: Page;

    private readonly productNames: Locator;
    private readonly productQuantity: Locator;
    private readonly shoppingCartHeading: Locator;
    private readonly emptyCartMessage: Locator;
    private readonly checkoutLink: Locator;
    private readonly continueShoppingLink: Locator;

    constructor(page :Page){
        this.page=page;
        this.productNames = page.locator('.table-bordered tbody tr td:nth-child(2) a');
        this.productQuantity = page.locator('.table-bordered tbody  tr td:nth-child(4) input');
        this.shoppingCartHeading= page.getByRole('heading',{name:'Shopping Cart'});
        this.emptyCartMessage = page.locator('#content').getByText('Your shopping cart is empty!', { exact: true });
        this.checkoutLink = page.getByRole('link', { name: /Checkout/ });
        this.continueShoppingLink = page.getByRole('link', { name: 'Continue' });
    }
    
    async isShoppingCartPageExists(){
        try{
            await this.shoppingCartHeading.waitFor({ 
                state : 'visible',
            timeout:15000,
        })
        return true;
        }catch(error){
            console.log(`Error checking Shopping cart Page  ${error}`);
            return false;
        }
    }

    async isProductInCart(productName : string){
        try{
            const count = await this.productNames.filter({hasText: productName}).count();
            return count > 0;
        }catch (error){
            console.log(`Error checking product in cart: ${error}`);
            return false;
        }
    }

    async getProductQuantity(){
        const value = await this.productQuantity.first().getAttribute('value');
        return value ?? '';
    }

    async getProductQuantityFor(productName: string): Promise<string> {
        return await this.getProductRow(productName).locator('input[name^="quantity["]').inputValue();
    }

    async getProductRowTotal(productName: string): Promise<string> {
        return await this.getProductRow(productName).locator('td').nth(5).innerText();
    }

    async updateProductQuantity(productName: string, quantity: string): Promise<void> {
        const row = this.getProductRow(productName);
        await row.locator('input[name^="quantity["]').fill(quantity);
        await row.locator('button[data-original-title="Update"]').click();
    }

    async removeProduct(productName: string): Promise<void> {
        await this.getProductRow(productName).locator('button[data-original-title="Remove"]').click();
    }

    async getEmptyCartMessageText(): Promise<string | null> {
        await this.emptyCartMessage.waitFor({ state: 'visible', timeout: 15000 });
        return await this.emptyCartMessage.textContent();
    }

    async clickCheckout(): Promise<void> {
        await this.checkoutLink.click();
    }

    async isContinueShoppingLinkVisible(): Promise<boolean> {
        return await this.continueShoppingLink.isVisible();
    }

    private getProductRow(productName: string): Locator {
        return this.page.locator('#content table tbody tr').filter({ hasText: productName }).first();
    }

}