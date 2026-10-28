# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web\add-to-cart.spec.ts >> Verify iphone can be successfully adeded to cart @master
- Location: tests\web\add-to-cart.spec.ts:19:5

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
        - textbox "Search" [ref=f2e41]: iphone
        - button [ref=f2e42] [cursor=pointer]
      - button "1 item(s) - $123.20" [ref=f2e46] [cursor=pointer]
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
          - link "Search" [ref=f2e75] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/search&language=en-gb&search=iphone
        - listitem [ref=f2e76]:
          - link "iPhone" [ref=f2e77] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/product&language=en-gb&search=iphone&product_id=40
      - generic [ref=f2e79]:
        - generic [ref=f2e80]:
          - generic [ref=f2e82]:
            - link [ref=f2e83] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/image/cache/catalog/demo/iphone_1-800x800.jpg
              - img "iPhone" [ref=f2e84]
            - generic [ref=f2e85]:
              - link [ref=f2e86] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/image/cache/catalog/demo/iphone_4-800x800.jpg
                - img "iPhone" [ref=f2e87]
              - link [ref=f2e88] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/image/cache/catalog/demo/iphone_3-800x800.jpg
                - img "iPhone" [ref=f2e89]
              - link [ref=f2e90] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/image/cache/catalog/demo/iphone_5-800x800.jpg
                - img "iPhone" [ref=f2e91]
              - link [ref=f2e92] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/image/cache/catalog/demo/iphone_2-800x800.jpg
                - img "iPhone" [ref=f2e93]
              - link [ref=f2e94] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/image/cache/catalog/demo/iphone_6-800x800.jpg
                - img "iPhone" [ref=f2e95]
          - generic [ref=f2e96]:
            - heading "iPhone" [level=1] [ref=f2e97]
            - list [ref=f2e98]:
              - listitem [ref=f2e99]:
                - text: "Brand:"
                - link "Apple" [ref=f2e100] [cursor=pointer]:
                  - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer.info&language=en-gb&manufacturer_id=8
              - listitem [ref=f2e101]: "Product Code: product 11"
              - listitem [ref=f2e102]: "Availability: In Stock"
            - paragraph [ref=f2e104]:
              - link "0 reviews" [ref=f2e115] [cursor=pointer]:
                - /url: "#"
              - text: /
              - link "Write a review" [ref=f2e116] [cursor=pointer]:
                - /url: "#"
            - list [ref=f2e117]:
              - listitem [ref=f2e118]:
                - heading "$123.20" [level=2] [ref=f2e119]
              - listitem [ref=f2e120]: "Ex Tax: $101.00"
            - generic [ref=f2e122]:
              - button "Add to Wish List" [ref=f2e123] [cursor=pointer]
              - button "Compare this Product" [ref=f2e125] [cursor=pointer]
            - generic [ref=f2e130]:
              - generic [ref=f2e131]: Qty
              - textbox [active] [ref=f2e132]: "2"
              - button "Add to Cart" [ref=f2e133] [cursor=pointer]
        - tablist [ref=f2e134]:
          - tab "Description" [selected] [ref=f2e135] [cursor=pointer]
          - tab "Reviews (0)" [ref=f2e136] [cursor=pointer]
        - generic [ref=f2e137]:
          - tabpanel [ref=f2e138]:
            - paragraph [ref=f2e139]: iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a name or number in your address book, a favorites list, or a call log. It also automatically syncs all your contacts from a PC, Mac, or Internet service. And it lets you select and listen to voicemail messages in whatever order you want just like email.
          - text: "* * *"
        - heading "Related Products" [level=3] [ref=f2e140]
        - generic [ref=f2e143]:
          - link [ref=f2e145] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/product&language=en-gb&product_id=42
            - img "Apple Cinema 30\"" [ref=f2e146]
          - generic [ref=f2e147]:
            - generic [ref=f2e148]:
              - heading [level=4] [ref=f2e149]:
                - link "Apple Cinema 30\"" [ref=f2e150] [cursor=pointer]:
                  - /url: http://localhost/opencart/upload/index.php?route=product/product&language=en-gb&product_id=42
              - paragraph [ref=f2e151]: The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed speci..
              - generic [ref=f2e152]:
                - text: $122.00
                - generic [ref=f2e153]: "Ex Tax: $100.00"
            - generic [ref=f2e154]:
              - button "Add to Cart" [ref=f2e155] [cursor=pointer]
              - button "Add to Wish List" [ref=f2e157] [cursor=pointer]
              - button "Compare this Product" [ref=f2e159] [cursor=pointer]
  - contentinfo [ref=f2e161]:
    - generic [ref=f2e162]:
      - generic [ref=f2e163]:
        - generic [ref=f2e164]:
          - heading "Information" [level=5] [ref=f2e165]
          - list [ref=f2e166]:
            - listitem [ref=f2e167]:
              - link "Terms & Conditions" [ref=f2e168] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=2
            - listitem [ref=f2e169]:
              - link "Delivery Information" [ref=f2e170] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=4
            - listitem [ref=f2e171]:
              - link "About Us" [ref=f2e172] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=1
            - listitem [ref=f2e173]:
              - link "Privacy Policy" [ref=f2e174] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=3
        - generic [ref=f2e175]:
          - heading "Customer Service" [level=5] [ref=f2e176]
          - list [ref=f2e177]:
            - listitem [ref=f2e178]:
              - link "Contact Us" [ref=f2e179] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/contact&language=en-gb
            - listitem [ref=f2e180]:
              - link "Returns" [ref=f2e181] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/returns.add&language=en-gb
            - listitem [ref=f2e182]:
              - link "Site Map" [ref=f2e183] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/sitemap&language=en-gb
        - generic [ref=f2e184]:
          - heading "Extras" [level=5] [ref=f2e185]
          - list [ref=f2e186]:
            - listitem [ref=f2e187]:
              - link "Brands" [ref=f2e188] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer&language=en-gb
            - listitem [ref=f2e189]:
              - link "Affiliate" [ref=f2e190] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/affiliate&language=en-gb
            - listitem [ref=f2e191]:
              - link "Specials" [ref=f2e192] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/special&language=en-gb
        - generic [ref=f2e193]:
          - heading "My Account" [level=5] [ref=f2e194]
          - list [ref=f2e195]:
            - listitem [ref=f2e196]:
              - link "My Account" [ref=f2e197] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb
            - listitem [ref=f2e198]:
              - link "Order History" [ref=f2e199] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb
            - listitem [ref=f2e200]:
              - link "Wish List" [ref=f2e201] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb
            - listitem [ref=f2e202]:
              - link "Newsletter" [ref=f2e203] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb
      - separator [ref=f2e204]
      - paragraph [ref=f2e205]:
        - text: Powered By
        - link "OpenCart" [ref=f2e206] [cursor=pointer]:
          - /url: https://www.opencart.com
        - text: Your Store © 2026
```

# Test source

```ts
  1  | import {test,expect} from '../../fixtures/pageFixtures';
  2  | import path from 'path';
  3  | import { DataProvider } from '../../utils/DataReader';
  4  | 
  5  | 
  6  | const execelPath = path.resolve(
  7  |     process.cwd(),
  8  |     'testdata/opencart_appdata.xlsx'
  9  | )
  10 | 
  11 | const products = DataProvider.readExcelBySheet(execelPath,'Add to Cart');
  12 | 
  13 | for( const product of products){
  14 |     const productName: string = String(product['Product']).trim();
  15 |     const quantity: string = String(product['Quantity']);
  16 | 
  17 |    
  18 | 
  19 | test(`Verify ${productName} can be successfully adeded to cart @master`, async ({homePage,loginPage,searchPage,productPage,shoppingCartPage}) => {
  20 |     
  21 |     await test.step('1) User opens the application',async ()=> {
  22 |         await homePage.navigateTo(process.env.APP_URL || 'http://localhost/opencart/upload/');
  23 |     })
  24 | 
  25 |     await test.step(`2) User searches a valid product ${productName}`,async () => {
  26 |         await homePage.searchProduct(productName);
  27 |     })
  28 | 
  29 |     await test.step('3) User navigates to search page',async () => {
  30 |         const isSuccess : boolean  = await searchPage.isSearchPageExists()
  31 |         expect(isSuccess).toBeTruthy();
  32 |     })
  33 |     await test.step('4) User verifies the product details and opens the product',async () => {
  34 |         const isProductVisible : boolean = await searchPage.isProductNameExists(productName)
  35 |         expect(isProductVisible).toBe(true);
  36 |         searchPage.clickOnSearchProduct(productName);
  37 |     })
  38 |     await test.step(`5) Set the quantity = ${quantity} when the product supports quantity selection`,async () => {
  39 |         productPage.enterQuantity(quantity);
  40 |     })
  41 |     await test.step('6) User clicks Add to Cart',async () => {
  42 |         productPage.clickAddToCart();
  43 |     })
  44 |     await test.step('7) Verifes the confirmation message',async () => {
  45 |         const isSuccess = await productPage.isSuccessMessageVisible();
> 46 |         expect(isSuccess).toBeTruthy();
     |                           ^ Error: expect(received).toBeTruthy()
  47 |         const successMessage = await productPage.getSuccessMessage();
  48 |         expect(successMessage).toContain('Success');
  49 |     })
  50 |     await test.step('8) Navigate to shopping cart page',async () => {
  51 |         // await homePage.navigateTo(process.env.WEB_APP_URL + 'index.php?route=checkout/cart');
  52 |         homePage.clickShoppingCartTab();
  53 |         const isSuccess : boolean = await shoppingCartPage.isShoppingCartPageExists()
  54 |         expect(isSuccess).toBeTruthy();
  55 |     })
  56 |     await test.step(`9) Verify the ${productName} in the shopping cart with quantity = ${quantity}`,async () => {
  57 |         const productInCart = await shoppingCartPage.isProductInCart(productName);
  58 |         expect(productInCart).toBeTruthy();
  59 |         const productInCartQuantity = await shoppingCartPage.getProductQuantity();
  60 |         expect(productInCartQuantity).toBe(quantity);
  61 |     })
  62 |     
  63 |     
  64 |     console.log(' Product successfully added to the cart ');
  65 | });
  66 | }
```