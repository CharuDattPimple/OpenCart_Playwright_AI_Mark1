import { test, expect } from '../../fixtures/pageFixtures';
import { DataGenerator } from '../../utils/dataGenerator';
import { executeQuery } from '../../utils/dbClient';

test.describe.serial('Opencart - Customer Registration using UI + Admin + DB Validation @uidb', () => {
    const firstName: string = DataGenerator.getFirstName();
    const lastName: string = DataGenerator.getLastName();
    const email: string = DataGenerator.getEmail();
    const password: any = DataGenerator.getPassword();
    const telephone: any = DataGenerator.getPhoneNumber();

    test('Register a customer with random data using UI @uidb', async ({ registerPage, homePage, sucessPage, myAccountPage }) => {


        await test.step('1) User Opens the application', async () => {
            await homePage.navigateTo(process.env.APP_URL || 'http://localhost/opencart/upload/');
        });

        await test.step('2) Register a new customer using dynamically generated unique data.', async () => {
            await homePage.clickMyAccount();
            await homePage.clickRegister();
            await registerPage.completeRegistration(firstName, lastName, email, telephone,password);
        })

        await test.step('3) Verify that the user is registered successfully', async () => {
            const isSuccess: boolean = await sucessPage.isSucccessPageExists();
            expect(isSuccess).toBeTruthy();

            await sucessPage.clickContinueButton();
            const isMyAccount: boolean = await myAccountPage.isMyaccountPageExists();
            expect(isMyAccount).toBeTruthy();
        })

    })

    test('Verify the register customer is in Opencart Admin portal @uidb', async ({ homePage, adminLoginPage, adminHomePage, customersPage }) => {
        const adminEmail: any = process.env.ADMIN_USERNAME;
        const adminPassword: any = process.env.ADMIN_PASSWORD;

        await test.step('1) Open the OpenCart Admin Portal', async () => {
            await homePage.navigateTo(process.env.ADMIN_APP_URL || 'http://localhost/opencart/upload/admin/');

        })
        await test.step('2) Log in using configured administrator credentials', async () => {
            await adminLoginPage.adminLogin(adminEmail, adminPassword);
            await adminLoginPage.closePopUp();
        })
        await test.step('3) Navigate to the Customers section', async () => {
            await adminHomePage.navigateToCustomers();
        })
        await test.step('4) Search for the customer using the unique email address ', async () => {
            await customersPage.searchCustomer(email);
        })
        await test.step('5) Verify that the customer exists', async () => {
            expect(await customersPage.getCustomerEmail()).toContain(email.toLowerCase());
        })
        await test.step('6) Open the customer record/details when applicable and verify its details', async () => {
            await customersPage.openCustomerDetails();
            expect(await customersPage.getCustomerFirstName()).toContain(firstName);
            expect(await customersPage.getCustomerLastName()).toContain(lastName);
            expect(await customersPage.getCustomerEmailAfterOpen()).
                toContain(email.toLowerCase());

            expect(await customersPage.getStatusValue()).toBeTruthy();
        })

    })

    test('Verify the customer record in the MySQL oc_customer table @uidb', async ({ }) => {

        const rows: any[] = (await executeQuery(
            'SELECT customer_id, firstname, lastname, email, status, date_added FROM oc_customer WHERE email = ?', [email])) as any[];

        expect(rows.length, `Exactly one customer record should exists for email ${email}`).toBe(1);

        const customer = rows[0];
        expect(customer.firstname, 'DB firstname should be match with generated firstname').toBe(firstName);
        expect(customer.lastname, 'DB lastname should be match with generated lastname').toBe(lastName);
        expect(customer.email, 'DB email should be match with generated email').toBe(email.toLowerCase());
        expect(customer.status, 'DB status should be 1 (enabled)').toBe(1);
        expect(customer.date_added, 'DB date added should exist').toBeTruthy();
    });
    console.log(' Customer registration validated using UI , Admin and MySql successfully');

})