import {test,expect} from '../../fixtures/pageFixtures';
import path from 'path';
import { DataProvider } from '../../utils/DataReader';


const execelPath = path.resolve(
    process.cwd(),
    'testdata/opencart_appdata.xlsx'
)

const products = DataProvider.readExcelBySheet(execelPath,'Add to Cart');

for( const product of products){
    const productName: string = String(product['Product']).trim();
    const quantity: string = String(product['Quantity']);

   

test(`Verify ${productName} can be successfully adeded to cart @master`, async ({homePage,loginPage,searchPage,productPage,shoppingCartPage}) => {
    
    await test.step('1) User opens the application',async ()=> {
        await homePage.navigateTo(process.env.WEB_APP_URL || 'http://localhost/opencart/upload/');
    })

    await test.step(`2) User searches a valid product ${productName}`,async () => {
        await homePage.searchProduct(productName);
    })

    await test.step('3) User navigates to search page',async () => {
        const isSuccess : boolean  = await searchPage.isSearchPageExists()
        expect(isSuccess).toBeTruthy();
    })
    await test.step('4) User verifies the product details and opens the product',async () => {
        const isProductVisible : boolean = await searchPage.isProductNameExists(productName)
        expect(isProductVisible).toBe(true);
        searchPage.clickOnSearchProduct(productName);
    })
    await test.step(`5) Set the quantity = ${quantity} when the product supports quantity selection`,async () => {
        productPage.enterQuantity(quantity);
    })
    await test.step('6) User clicks Add to Cart',async () => {
        productPage.clickAddToCart();
    })
    await test.step('7) Verifes the confirmation message',async () => {
        const isSuccess = await productPage.isSuccessMessageVisible();
        expect(isSuccess).toBeTruthy();
        const successMessage = await productPage.getSuccessMessage();
        expect(successMessage).toContain('Success');
    })
    await test.step('8) Navigate to shopping cart page',async () => {
        // await homePage.navigateTo(process.env.WEB_APP_URL + 'index.php?route=checkout/cart');
        homePage.clickShoppingCartTab();
        const isSuccess : boolean = await shoppingCartPage.isShoppingCartPageExists()
        expect(isSuccess).toBeTruthy();
    })
    await test.step(`9) Verify the ${productName} in the shopping cart with quantity = ${quantity}`,async () => {
        const productInCart = await shoppingCartPage.isProductInCart(productName);
        expect(productInCart).toBeTruthy();
        const productInCartQuantity = await shoppingCartPage.getProductQuantity();
        expect(productInCartQuantity).toBe(quantity);
    })
    
    
    console.log(' Product successfully added to the cart ');
});
}