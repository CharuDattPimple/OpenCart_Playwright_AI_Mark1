import { test, expect } from '../../fixtures/pageFixtures'
import { DataGenerator } from '../../utils/dataGenerator'
import path from 'path';
import { DataProvider } from '../../utils/DataReader';

const execelPath = path.resolve(
    process.cwd(),
    'testdata/opencart_appdata.xlsx'
)

const products = DataProvider.readExcelBySheet(execelPath, 'Add to Cart');

const product = products[0];

if (!product) {
    throw new Error('No test data found in Add to Cart sheet');
}

const productName: string = String(product['Product']).trim();
const quantity: string = String(product['Quantity']);

test(`Verify end to end shopping flow for opencart application @master @e2e`,
    async ({ homePage, loginPage, searchPage, productPage, shoppingCartPage, registerPage, sucessPage, myAccountPage }) => {

        const firstName: string = DataGenerator.getFirstName();
        const lastName: string = DataGenerator.getLastName();
        const email: string = DataGenerator.getEmail();
        const password: any = DataGenerator.getPassword();
        const telephone = DataGenerator.getPhoneNumber();

        await test.step('1) User Opens the application', async () => {
            await homePage.navigateTo(process.env.WEB_APP_URL || 'http://localhost/opencart/upload/');
        });

        await test.step('2) Register a new customer using dynamically generated unique data.', async () => {
            await homePage.clickMyAccount();
            await homePage.clickRegister();

            await registerPage.completeRegistration(firstName, lastName, email, telephone, password);
        })

        await test.step('3) Verify that the user is registered successfully', async () => {
            const isSuccess: boolean = await sucessPage.isSucccessPageExists();
            expect(isSuccess).toBeTruthy();

            await sucessPage.clickContinueButton();
            const isMyAccount: boolean = await myAccountPage.isMyaccountPageExists();
            expect(isMyAccount).toBeTruthy();
        })

        await test.step('4) Logout from the applicaiton', async () => {
            await myAccountPage.clickLogout();
            const isSuccess: boolean = await myAccountPage.isLogoutSuccess();
            expect(isSuccess).toBeTruthy();
        })

        await test.step('5) Log in again using the newly created credentials', async () => {
            await homePage.navigateToDashboard();
            await homePage.clickMyAccount();
            await homePage.clickLogin();
            await loginPage.login(email, password);
        })
        await test.step('6) Verify successfull login', async () => {
            const isMyAccount: boolean = await myAccountPage.isMyaccountPageExists();
            expect(isMyAccount).toBeTruthy();

        })

        await test.step(`7) User searches a valid product ${productName}`, async () => {
            await homePage.searchProduct(productName);
        })

        await test.step('8) User navigates to search page', async () => {
            const isSuccess: boolean = await searchPage.isSearchPageExists()
            expect(isSuccess).toBeTruthy();
        })
        await test.step('9) User verifies the product details and opens the product', async () => {
            const isProductVisible: boolean = await searchPage.isProductNameExists(productName)
            expect(isProductVisible).toBe(true);
            searchPage.clickOnSearchProduct(productName);
        })
        await test.step(`10) Set the quantities = ${quantity} when the product supports quantity selection`, async () => {

            await productPage.enterQuantity(quantity);
            const actualQuantity = await productPage.getEnterQuantitiy();
            expect(actualQuantity).toBe(quantity);
        })
        await test.step('11) User clicks Add to Cart', async () => {
            await productPage.clickAddToCart();
        })
        await test.step('12) Verifes the confirmation message', async () => {
            const isSuccess = await productPage.isSuccessMessageVisible();
            expect(isSuccess).toBeTruthy();
            const successMessage = await productPage.getSuccessMessage();
            expect(successMessage).toContain('Success');
        })
        await test.step('13) Navigate to shopping cart page', async () => {

            homePage.clickShoppingCartTab();
            const isSuccess: boolean = await shoppingCartPage.isShoppingCartPageExists()
            expect(isSuccess).toBeTruthy();
        })
        await test.step(`9) Verify the ${productName} in the shopping cart with quantity = ${quantity}`, async () => {
            const productInCart = await shoppingCartPage.isProductInCart(productName);
            expect(productInCart).toBeTruthy();
            const productInCartQuantity = await shoppingCartPage.getProductQuantity();
            expect(productInCartQuantity).toBe(quantity);
        })


        console.log('End to End shopping journey completed successfully');


    })