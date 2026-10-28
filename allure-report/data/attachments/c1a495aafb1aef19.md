# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\user-registration.spec.ts >> User registration test @master
- Location: tests\web\user-registration.spec.ts:4:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=f2e1]:
  - navigation [ref=f2e2]:
    - generic [ref=f2e4]:
      - list [ref=f2e6]:
        - listitem [ref=f2e7]:
          - button [ref=f2e10] [cursor=pointer]:
            - strong [ref=f2e11]: $
            - text: Currency
        - listitem
      - list [ref=f2e14]:
        - listitem [ref=f2e15]:
          - link "123456789" [ref=f2e16] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=information/contact&language=en-gb
        - listitem [ref=f2e18]:
          - button "My Account" [ref=f2e20] [cursor=pointer]
        - listitem [ref=f2e23]:
          - link "Wish List (0)" [ref=f2e24] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb
        - listitem [ref=f2e26]:
          - link "Shopping Cart" [ref=f2e27] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/cart&language=en-gb
        - listitem [ref=f2e29]:
          - link "Checkout" [ref=f2e30] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout&language=en-gb
  - banner [ref=f2e32]:
    - generic [ref=f2e34]:
      - link [ref=f2e37] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/index.php?route=common/home&language=en-gb
        - img "Your Store" [ref=f2e38]
      - generic [ref=f2e40]:
        - textbox "Search" [ref=f2e41]
        - button [ref=f2e42] [cursor=pointer]
      - button "0 item(s) - $0.00" [ref=f2e46] [cursor=pointer]
  - main [ref=f2e48]:
    - navigation [ref=f2e50]:
      - list [ref=f2e52]:
        - listitem [ref=f2e53]:
          - link "Desktops" [ref=f2e54] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=20
        - listitem [ref=f2e55]:
          - link "Laptops & Notebooks" [ref=f2e56] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=18
        - listitem [ref=f2e57]:
          - link "Components" [ref=f2e58] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=25
        - listitem [ref=f2e59]:
          - link "Tablets" [ref=f2e60] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=57
        - listitem [ref=f2e61]:
          - link "Software" [ref=f2e62] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=17
        - listitem [ref=f2e63]:
          - link "Phones & PDAs" [ref=f2e64] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=24
        - listitem [ref=f2e65]:
          - link "Cameras" [ref=f2e66] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=33
        - listitem [ref=f2e67]:
          - link "MP3 Players" [ref=f2e68] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=34
    - generic [ref=f2e69]:
      - list [ref=f2e70]:
        - listitem [ref=f2e71]:
          - link [ref=f2e72] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=common/home&language=en-gb
        - listitem [ref=f2e74]:
          - link "Account" [ref=f2e75] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb
        - listitem [ref=f2e76]:
          - link "Register" [ref=f2e77] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/register&language=en-gb
      - generic [ref=f2e78]:
        - generic [ref=f2e79]:
          - heading "Register Account" [level=1] [ref=f2e80]
          - paragraph [ref=f2e81]:
            - text: If you already have an account with us, please login at the
            - link "login page" [ref=f2e82] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/login&language=en-gb
            - text: .
          - generic [ref=f2e83]:
            - group "Your Personal Details" [ref=f2e84]:
              - generic [ref=f2e86]:
                - generic [ref=f2e87]: "* First Name"
                - textbox "* First Name" [ref=f2e89]:
                  - /placeholder: First Name
                  - text: Hiram
              - generic [ref=f2e90]:
                - generic [ref=f2e91]: "* Last Name"
                - textbox "* Last Name" [ref=f2e93]:
                  - /placeholder: Last Name
                  - text: Franecki
              - generic [ref=f2e94]:
                - generic [ref=f2e95]: "* E-Mail"
                - textbox "* E-Mail" [ref=f2e97]:
                  - /placeholder: E-Mail
                  - text: Theodora_Considine59@gmail.com
            - group "Your Password" [ref=f2e98]:
              - generic [ref=f2e100]:
                - generic [ref=f2e101]: "* Password"
                - textbox "* Password" [ref=f2e103]:
                  - /placeholder: Password
                  - text: 2pHXne2X
            - group "Newsletter" [ref=f2e104]:
              - generic [ref=f2e106]:
                - generic [ref=f2e107]: Subscribe
                - checkbox [ref=f2e110]
            - generic [ref=f2e111]:
              - generic [ref=f2e112]:
                - generic [ref=f2e113]:
                  - text: I have read and agree to the
                  - link "Privacy Policy" [ref=f2e114] [cursor=pointer]:
                    - /url: http://localhost/opencart/upload/index.php?route=information/information.info&language=en-gb&information_id=3
                - checkbox [checked] [ref=f2e115]
              - button [disabled]
        - complementary [ref=f2e116]:
          - generic [ref=f2e117]:
            - link "Login" [ref=f2e118] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/login&language=en-gb
            - link "Register" [ref=f2e119] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/register&language=en-gb
            - link "Forgotten Password" [ref=f2e120] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/forgotten&language=en-gb
            - link "My Account" [ref=f2e121] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb
            - link "Payment Methods" [ref=f2e122] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/payment_method&language=en-gb
            - link "Address Book" [ref=f2e123] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/address&language=en-gb
            - link "Wish List" [ref=f2e124] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb
            - link "Order History" [ref=f2e125] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb
            - link "Downloads" [ref=f2e126] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/download&language=en-gb
            - link "Subscriptions" [ref=f2e127] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/subscription&language=en-gb
            - link "Reward Points" [ref=f2e128] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/reward&language=en-gb
            - link "Returns" [ref=f2e129] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/returns&language=en-gb
            - link "Transactions" [ref=f2e130] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/transaction&language=en-gb
            - link "Newsletter" [ref=f2e131] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb
  - contentinfo [ref=f2e132]:
    - generic [ref=f2e133]:
      - generic [ref=f2e134]:
        - generic [ref=f2e135]:
          - heading "Information" [level=5] [ref=f2e136]
          - list [ref=f2e137]:
            - listitem [ref=f2e138]:
              - link "Terms & Conditions" [ref=f2e139] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=2
            - listitem [ref=f2e140]:
              - link "Delivery Information" [ref=f2e141] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=4
            - listitem [ref=f2e142]:
              - link "About Us" [ref=f2e143] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=1
            - listitem [ref=f2e144]:
              - link "Privacy Policy" [ref=f2e145] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=3
        - generic [ref=f2e146]:
          - heading "Customer Service" [level=5] [ref=f2e147]
          - list [ref=f2e148]:
            - listitem [ref=f2e149]:
              - link "Contact Us" [ref=f2e150] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/contact&language=en-gb
            - listitem [ref=f2e151]:
              - link "Returns" [ref=f2e152] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/returns.add&language=en-gb
            - listitem [ref=f2e153]:
              - link "Site Map" [ref=f2e154] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/sitemap&language=en-gb
        - generic [ref=f2e155]:
          - heading "Extras" [level=5] [ref=f2e156]
          - list [ref=f2e157]:
            - listitem [ref=f2e158]:
              - link "Brands" [ref=f2e159] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer&language=en-gb
            - listitem [ref=f2e160]:
              - link "Affiliate" [ref=f2e161] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/affiliate&language=en-gb
            - listitem [ref=f2e162]:
              - link "Specials" [ref=f2e163] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/special&language=en-gb
        - generic [ref=f2e164]:
          - heading "My Account" [level=5] [ref=f2e165]
          - list [ref=f2e166]:
            - listitem [ref=f2e167]:
              - link "My Account" [ref=f2e168] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb
            - listitem [ref=f2e169]:
              - link "Order History" [ref=f2e170] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb
            - listitem [ref=f2e171]:
              - link "Wish List" [ref=f2e172] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb
            - listitem [ref=f2e173]:
              - link "Newsletter" [ref=f2e174] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb
      - separator [ref=f2e175]
      - paragraph [ref=f2e176]:
        - text: Powered By
        - link "OpenCart" [ref=f2e177] [cursor=pointer]:
          - /url: https://www.opencart.com
        - text: Your Store © 2026
```

# Test source

```ts
  1  | import {test, expect} from '../../fixtures/pageFixtures';
  2  | import { DataGenerator } from '../../utils/dataGenerator';
  3  | 
  4  | test('User registration test @master',async ({registerPage,homePage,sucessPage,myAccountPage})=>{
  5  |     const firstName = DataGenerator.getFirstName();
  6  |     const lastName = DataGenerator.getLastName();
  7  |     const email = DataGenerator.getEmail();
  8  |     const password = DataGenerator.getPassword();
  9  | 
  10 |     await test.step('1) User Opens the application', async () => {
  11 |         await homePage.navigateTo(process.env.APP_URL || 'http://localhost/opencart/upload/');
  12 |     });
  13 | 
  14 |     await test.step('2) User navigates to my Account -> Register page', async () => {
  15 |         await homePage.clickMyAccount();
  16 |         await homePage.clickRegister();
  17 |     });
  18 | 
  19 |     await test.step('3) Verify that the register page is displayed', async () => {
  20 |         const isRegisterPage = await registerPage.isRegisterPageExists();
  21 |         expect(isRegisterPage).toBeTruthy();
  22 |     });
  23 | 
  24 |     await test.step('4) User fills the registration form', async () => {
  25 |         await registerPage.completeRegistration(firstName, lastName, email, password);
  26 |     })
  27 | 
  28 |     await test.step('5) Verify that the user is registered successfully', async () => {
  29 |         const isSuccess = await sucessPage.isSucccessPageExists();
> 30 |         expect(isSuccess).toBeTruthy();
     |                           ^ Error: expect(received).toBeTruthy()
  31 |         
  32 |     })
  33 | 
  34 |     await test.step('6) Verify the account-created confirmation message', async () => {
  35 |         const successMessage = await sucessPage.getSuccessMessage();
  36 |         expect(successMessage).toContain('Your Account Has Been Created!');
  37 |     })
  38 | 
  39 |     await test.step('7) Verify the account is accessible', async () => {
  40 |         await sucessPage.clickContinueButton();
  41 |         const isMyAccount = await myAccountPage.isMyaccountPageExists();
  42 |         expect(isMyAccount).toBeTruthy();
  43 |     })
  44 | 
  45 |     console.log(`User Registration Test completed successfully for user: ${firstName} ${lastName} with email: ${email}`);
  46 | 
  47 | });
```