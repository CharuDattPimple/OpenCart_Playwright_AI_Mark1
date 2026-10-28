import {Page, Locator} from '@playwright/test';

export class ShoppingCartPage{
    private readonly page: Page;

    private readonly productNames: Locator;
    private readonly productQuantity: Locator;
    private readonly shoppingCartHeading: Locator;

    constructor(page :Page){
        this.page=page;
        this.productNames = page.locator('.table-bordered tbody tr td:nth-child(2) a');
        this.productQuantity = page.locator('.table-bordered tbody  tr td:nth-child(4) input');
        this.shoppingCartHeading= page.getByRole('heading',{name:'Shopping Cart'});
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

}