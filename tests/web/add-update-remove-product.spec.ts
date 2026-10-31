//Created using Prompts
import { test, expect } from '../../fixtures/pageFixtures';
import path from 'path';
import { DataProvider } from '../../utils/DataReader';

const excelPath = path.resolve(
    process.cwd(),
    'testdata/opencart_appdata.xlsx'
);

const products = DataProvider.readExcelBySheet(excelPath, 'Add Update Remove');

for (const product of products) {
    const productName: string = String(product['Product']).trim();
    const quantity: string = String(product['Quantity']);
    const updateQuantity: string = String(product['Update Quantity']);

    test(`Verify ${productName} can be added, updated, and removed from cart @master @web @datadriven`, async ({
        page,
        homePage,
        searchPage,
        productPage,
        shoppingCartPage,
    }) => {
        const appUrl = new URL(
            process.env.WEB_APP_URL || 'https://awesomeqa.com/ui/'
        );

        await test.step('1) User opens the application and verifies the shopping cart is empty', async () => {
            await homePage.navigateTo(appUrl.toString());
            await homePage.clickShoppingCartTab();

            const isShoppingCartPage = await shoppingCartPage.isShoppingCartPageExists();
            expect(isShoppingCartPage).toBeTruthy();

            const emptyCartMessage = await shoppingCartPage.getEmptyCartMessageText();
            expect(emptyCartMessage).toBe('Your shopping cart is empty!');
        });

        await test.step(`2) User searches a valid product ${productName}`, async () => {
            await homePage.searchProduct(productName);
        });

        await test.step('3) User navigates to the search page', async () => {
            const isSearchPage: boolean = await searchPage.isSearchPageExists();
            expect(isSearchPage).toBeTruthy();
        });

        await test.step('4) User verifies the product details and opens the product', async () => {
            const isProductVisible: boolean = await searchPage.isProductNameExists(productName);
            expect(isProductVisible).toBeTruthy();

            await searchPage.clickOnSearchProduct(productName);
        });

        await test.step(`5) User verifies ${productName} is in stock`, async () => {
            const availability = await productPage.getAvailabilityText();
            const isInStock = /^Availability:\s*In Stock$/i.test(availability.trim());

            test.skip(!isInStock, `${productName} is not currently shown as in stock`);
            expect(isInStock).toBeTruthy();
        });

        await test.step(`6) User sets the quantity to ${quantity}`, async () => {
            await productPage.enterQuantity(quantity);

            const actualQuantity = await productPage.getEnterQuantitiy();
            expect(actualQuantity).toBe(quantity);
        });

        await test.step('7) User clicks Add to Cart', async () => {
            await productPage.clickAddToCart();
        });

        await test.step('8) User verifies the confirmation message', async () => {
            const isSuccess = await productPage.isSuccessMessageVisible();
            expect(isSuccess).toBeTruthy();

            const successMessage = await productPage.getSuccessMessage();
            expect(successMessage).toContain('Success');
        });

        await test.step('9) User opens the shopping cart', async () => {
            await homePage.clickShoppingCartTab();

            const isShoppingCartPage = await shoppingCartPage.isShoppingCartPageExists();
            expect(isShoppingCartPage).toBeTruthy();
        });

        await test.step(`10) User verifies ${productName} in the cart with quantity ${quantity}`, async () => {
            const isProductInCart = await shoppingCartPage.isProductInCart(productName);
            expect(isProductInCart).toBeTruthy();

            const actualQuantity = await shoppingCartPage.getProductQuantityFor(productName);
            expect(actualQuantity).toBe(quantity);
        });

        await test.step(`11) User updates the product quantity to ${updateQuantity}`, async () => {
            const initialRowTotal = await shoppingCartPage.getProductRowTotal(productName);
            await shoppingCartPage.updateProductQuantity(productName, updateQuantity);

            const actualQuantity = await shoppingCartPage.getProductQuantityFor(productName);
            expect(actualQuantity).toBe(updateQuantity);

            const updatedRowTotal = await shoppingCartPage.getProductRowTotal(productName);
            expect(updatedRowTotal).not.toBe(initialRowTotal);
        });

        await test.step('12) User removes the product and verifies the shopping cart is empty', async () => {
            await shoppingCartPage.removeProduct(productName);

            const emptyCartMessage = await shoppingCartPage.getEmptyCartMessageText();
            expect(emptyCartMessage).toBe('Your shopping cart is empty!');
        });
    });
}
