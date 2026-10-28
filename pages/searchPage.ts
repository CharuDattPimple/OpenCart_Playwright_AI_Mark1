import {Page,Locator} from '@playwright/test';

export class SearchPage {
    private readonly page:Page;

    private readonly searchContainer : Locator;
    

    constructor(page:Page){
        this.page=page;
        this.searchContainer=page.locator('#product-search');    
    }

     async isSearchPageExists(): Promise<boolean> {
    try {
        await this.searchContainer.waitFor({
            state: 'visible',
            timeout: 15000,
        });

        return true;
    } catch (error) {
        console.log(`Error checking search page header visibility: ${error}`
        );
        return false;
    }
}

async isProductNameExists(searchedProduct: string){
    const searchedProductname = this.page.getByRole('link',{
        name : searchedProduct,
        exact :true
    }).first();
    try{
        await searchedProductname.isVisible();
        return true;
    } catch (error) {
        console.log(`Error checking search page item visibility: ${error}`);
        return false;
    }
}

async clickOnSearchProduct(searchedProduct: string): Promise<void> {
     const searchedProductname = this.page.getByAltText(searchedProduct).first();
     await searchedProductname.click();
}

}