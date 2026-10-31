import {test as base, expect} from '@playwright/test';
import dotenv from 'dotenv';

import { RegisterPage } from '../pages/registerPage';
import {HomePage} from '../pages/homePage';
import { SuccessPage } from '../pages/successPage';
import { MyAccountPage} from "../pages/myAccountPage";
import {LoginPage} from "../pages/loginPage";
import {SearchPage} from "../pages/searchPage";
import { ProductPage } from '../pages/productPage';
import { ShoppingCartPage } from '../pages/shoppingCartPage';
import { AdminLoginPage } from '../pages/adminLoginPage';
import { AdminHomePage } from '../pages/adminHomePage';
import { CustomersPage} from '../pages/customersPage';

// Load environment variables from .env file
dotenv.config();

const APP_URL = process.env.APP_URL || 'http://localhost/opencart/upload/';

// Define the PageFixture type that extends Playwright's test with custom fixtures
type PageFixture = {
  // The registerPage fixture provides a RegisterPage instance for testing
  registerPage: RegisterPage;
  homePage: HomePage;
  sucessPage: SuccessPage;
  myAccountPage : MyAccountPage;
  loginPage : LoginPage;
  searchPage : SearchPage;
  productPage: ProductPage;
  shoppingCartPage: ShoppingCartPage;
  adminLoginPage : AdminLoginPage;
  adminHomePage : AdminHomePage;
  customersPage : CustomersPage;
};

// Export the extended test with custom fixtures
export const test = base.extend<PageFixture>({
    // Defines the custom fixture named `homePage`.
    homePage: async ({ page }, use) => {
    // Creates a HomePage page-object instance using Playwright's `page`.
        const homePage = new HomePage(page);
    // Supplies that instance to the test. Playwright waits here while the test uses it.
        await use(homePage);
    },
    registerPage: async ({ page }, use) => {
        const registerPage = new RegisterPage(page);
        await use(registerPage);
    },
    sucessPage : async ({page},use) => {
        const sucessPage = new SuccessPage(page);
        await use(sucessPage);
    },
    myAccountPage : async ({page},use) => {
        const myAccountPage = new MyAccountPage(page);
        await use(myAccountPage);
    },
    loginPage : async({page},use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    searchPage: async({page},use) => {
        const searchPage = new SearchPage(page);
        await use(searchPage);
    },
    productPage: async ({page},use)=> {
        const productPage = new ProductPage(page);
        await use(productPage);
    },
    shoppingCartPage: async ({page},use)=> {
        const shoppingCartPage = new ShoppingCartPage(page);
        await use(shoppingCartPage);
    },
    adminLoginPage: async ({page},use)=> {
        const adminLoginPage=new AdminLoginPage(page);
        await use(adminLoginPage);
    },
    adminHomePage: async ({page},use)=> {
        const adminHomePage=new AdminHomePage(page);
        await use(adminHomePage);
    }
    ,
    customersPage: async ({page},use)=> {
        const customersPage=new CustomersPage(page);
        await use(customersPage);
    }
    
});

export { expect } from '@playwright/test';
