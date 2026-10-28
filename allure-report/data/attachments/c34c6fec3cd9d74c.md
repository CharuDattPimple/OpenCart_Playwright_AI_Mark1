# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: db\customer-register-e2e.spec.ts >> Opencart - Customer Registration using UI + Admin + DB Validation @master @e2e >> Verify the register customer is in Opencart Admin portal @master @e2e
- Location: tests\db\customer-register-e2e.spec.ts:42:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f3e2]:
  - banner [ref=f3e3]:
    - generic [ref=f3e4]:
      - link [ref=f3e5] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/admin/index.php?route=common/dashboard&user_token=b97a630c8b0738d116f3c26e61b67a40
        - img "OpenCart" [ref=f3e6]
      - list [ref=f3e7]:
        - listitem [ref=f3e8]:
          - link [ref=f3e9] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e11]:
          - link [ref=f3e12] [cursor=pointer]:
            - /url: en-gb
            - img "English" [ref=f3e13]
        - listitem [ref=f3e14]:
          - link [ref=f3e15] [cursor=pointer]:
            - /url: "#"
            - img "John Doe" [ref=f3e16]
            - generic [ref=f3e17]: John Doe
        - listitem [ref=f3e19]:
          - link "Logout" [ref=f3e20] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/admin/index.php?route=common/logout&user_token=b97a630c8b0738d116f3c26e61b67a40
  - navigation [ref=f3e22]:
    - generic [ref=f3e23]: Navigation
    - list [ref=f3e25]:
      - listitem [ref=f3e26]:
        - link "Dashboard" [ref=f3e27] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/admin/index.php?route=common/dashboard&user_token=b97a630c8b0738d116f3c26e61b67a40
      - listitem [ref=f3e29]:
        - link "Catalog " [ref=f3e30] [cursor=pointer]:
          - /url: "#collapse-1"
        - text:                 
      - listitem [ref=f3e32]:
        - link "CMS " [ref=f3e33] [cursor=pointer]:
          - /url: "#collapse-2"
        - text:    
      - listitem [ref=f3e35]:
        - link "Extensions " [ref=f3e36] [cursor=pointer]:
          - /url: "#collapse-3"
        - text:       
      - listitem [ref=f3e38]:
        - link "Design " [ref=f3e39] [cursor=pointer]:
          - /url: "#collapse-4"
        - text:     
      - listitem [ref=f3e41]:
        - link "Sales " [ref=f3e42] [cursor=pointer]:
          - /url: "#collapse-5"
        - text:   
      - listitem [ref=f3e44]:
        - link "Customers " [ref=f3e45] [cursor=pointer]:
          - /url: "#collapse-6"
        - list [ref=f3e47]:
          - listitem [ref=f3e48]:
            - link "Customers" [ref=f3e49] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer&user_token=b97a630c8b0738d116f3c26e61b67a40
          - listitem [ref=f3e50]:
            - link "Customer Groups" [ref=f3e51] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer_group&user_token=b97a630c8b0738d116f3c26e61b67a40
          - listitem [ref=f3e52]:
            - link "Customer Approvals" [ref=f3e53] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer_approval&user_token=b97a630c8b0738d116f3c26e61b67a40
          - listitem [ref=f3e54]:
            - link "GDPR" [ref=f3e55] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/admin/index.php?route=customer/gdpr&user_token=b97a630c8b0738d116f3c26e61b67a40
          - listitem [ref=f3e56]:
            - link "Custom Fields" [ref=f3e57] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/admin/index.php?route=customer/custom_field&user_token=b97a630c8b0738d116f3c26e61b67a40
      - listitem [ref=f3e58]:
        - link "Marketing " [ref=f3e59] [cursor=pointer]:
          - /url: "#collapse-7"
        - text:    
      - listitem [ref=f3e61]:
        - link "System " [ref=f3e62] [cursor=pointer]:
          - /url: "#collapse-8"
        - text:                                   
      - listitem [ref=f3e64]:
        - link "Reports " [ref=f3e65] [cursor=pointer]:
          - /url: "#collapse-9"
        - text:   
    - list [ref=f3e68]:
      - listitem [ref=f3e69]:
        - generic [ref=f3e70]:
          - text: Orders Completed
          - generic [ref=f3e71]: 0%
        - generic [ref=f3e72]:
          - progressbar:
            - generic: 0%
      - listitem [ref=f3e73]:
        - generic [ref=f3e74]:
          - text: Orders Processing
          - generic [ref=f3e75]: 0%
        - generic [ref=f3e76]:
          - progressbar:
            - generic: 0%
      - listitem [ref=f3e77]:
        - generic [ref=f3e78]:
          - text: Other Statuses
          - generic [ref=f3e79]: 0%
        - generic [ref=f3e80]:
          - progressbar:
            - generic: 0%
  - generic [ref=f3e81]:
    - generic [ref=f3e83]:
      - generic [ref=f3e84]:
        - link "Orders" [ref=f3e85] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/admin/index.php?route=sale/order&user_token=b97a630c8b0738d116f3c26e61b67a40&filter_customer_id=52
        - button "Save" [ref=f3e87] [cursor=pointer]
        - link "Back" [ref=f3e89] [cursor=pointer]:
          - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer&user_token=b97a630c8b0738d116f3c26e61b67a40&filter_email=Lorna_Jerde%40gmail.com
      - heading "Customers" [level=1] [ref=f3e91]
      - list [ref=f3e92]:
        - listitem [ref=f3e93]:
          - link "Home" [ref=f3e94] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/admin/index.php?route=common/dashboard&user_token=b97a630c8b0738d116f3c26e61b67a40
        - listitem [ref=f3e95]:
          - text: 
          - link "Customers" [ref=f3e96] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/admin/index.php?route=customer/customer&user_token=b97a630c8b0738d116f3c26e61b67a40&filter_email=Lorna_Jerde%40gmail.com
    - generic [ref=f3e98]:
      - generic [ref=f3e99]: Edit Customer
      - generic [ref=f3e101]:
        - tablist [ref=f3e102]:
          - tab "General" [selected] [ref=f3e103] [cursor=pointer]
          - tab "Addresses" [ref=f3e104] [cursor=pointer]
          - tab "Payment Methods" [ref=f3e105] [cursor=pointer]
          - tab "History" [ref=f3e106] [cursor=pointer]
          - tab "Transactions" [ref=f3e107] [cursor=pointer]
          - tab "Reward Points" [ref=f3e108] [cursor=pointer]
          - tab "IP Addresses" [ref=f3e109] [cursor=pointer]
          - tab "Authorize" [ref=f3e110] [cursor=pointer]
        - tabpanel [ref=f3e112]:
          - generic [ref=f3e113]:
            - group "Customer Details" [ref=f3e114]:
              - generic [ref=f3e116]:
                - generic [ref=f3e117]: Store
                - combobox "Store" [ref=f3e119]:
                  - option "Default" [selected]
              - generic [ref=f3e120]:
                - generic [ref=f3e121]: Language
                - combobox "Language" [ref=f3e123]:
                  - option "English" [selected]
              - generic [ref=f3e124]:
                - generic [ref=f3e125]: Customer Group
                - combobox "Customer Group" [ref=f3e127]:
                  - option "Default" [selected]
                  - option "Retail"
                  - option "Wholesale"
              - generic [ref=f3e128]:
                - generic [ref=f3e129]: "* First Name"
                - textbox "* First Name" [ref=f3e131]:
                  - /placeholder: First Name
                  - text: Joanny
              - generic [ref=f3e132]:
                - generic [ref=f3e133]: "* Last Name"
                - textbox "* Last Name" [ref=f3e135]:
                  - /placeholder: Last Name
                  - text: Bahringer
              - generic [ref=f3e136]:
                - generic [ref=f3e137]: "* E-Mail"
                - textbox "* E-Mail" [ref=f3e139]:
                  - /placeholder: E-Mail
                  - text: lorna_jerde@gmail.com
              - generic [ref=f3e140]:
                - generic [ref=f3e141]: Telephone
                - textbox "Telephone" [ref=f3e143]
            - group "Password" [ref=f3e144]:
              - generic [ref=f3e146]:
                - generic [ref=f3e147]: "* Password"
                - textbox "* Password" [ref=f3e149]:
                  - /placeholder: Password
              - generic [ref=f3e150]:
                - generic [ref=f3e151]: "* Confirm"
                - textbox "* Confirm" [ref=f3e153]:
                  - /placeholder: Confirm
            - group "Other" [ref=f3e154]:
              - generic [ref=f3e156]:
                - generic [ref=f3e157]: Newsletter
                - checkbox [ref=f3e160]
              - generic [ref=f3e161]:
                - generic [ref=f3e162]: Status
                - checkbox [checked] [ref=f3e165]
              - generic [ref=f3e166]:
                - generic [ref=f3e167]: Safe
                - generic [ref=f3e168]:
                  - checkbox [ref=f3e170]
                  - generic [ref=f3e171]: Set to true to avoid this customer from being caught by the anti-fraud system
              - generic [ref=f3e172]:
                - generic [ref=f3e173]: Commenter
                - generic [ref=f3e174]:
                  - checkbox [ref=f3e176]
                  - generic [ref=f3e177]: Set to true to allow customer from being caught by the anti-spam system
  - contentinfo [ref=f3e178]:
    - link "OpenCart" [ref=f3e179] [cursor=pointer]:
      - /url: https://www.opencart.com
    - text: © 2009-2026 All Rights Reserved.Version 4.1.0.4
```

# Test source

```ts
  1  | import {Page, Locator} from '@playwright/test';
  2  | 
  3  | export class CustomersPage{
  4  | 
  5  |     private readonly page:Page;
  6  |     private readonly emailSearch:Locator;
  7  |     private readonly filterButton:Locator;
  8  |     private readonly searchEmail:Locator;
  9  |     private readonly searchEditButton: Locator;
  10 |     private readonly custFirstName: Locator;
  11 |     private readonly custLastName: Locator;
  12 |     private readonly custEmail: Locator;
  13 |     private readonly statusToggle: Locator;
  14 | 
  15 |     constructor(page: Page){
  16 |         this.page= page;
  17 |         this.emailSearch = page.getByRole('textbox', { name: 'E-Mail' })
  18 |         this.filterButton = page.getByRole('button',{name: ' Filter'});
  19 |         // this.searchEmail = page.locator('.table-bordered tbody tr td:nth-child(3)');
  20 |           this.searchEmail = page.locator('.table-bordered tbody tr').first().locator('td').nth(2);
  21 |         this.searchEditButton = page.getByRole('link', { name: 'Edit' })
  22 |         this.custFirstName = page.getByRole('textbox', { name: '* First Name' });
  23 |         this.custLastName = page.getByRole('textbox', { name: '* Last Name' });
  24 |         this.custEmail = page.getByRole('textbox', { name: '* E-Mail' });
  25 |         this.statusToggle = page.locator('#input-status')
  26 |         
  27 |     }
  28 | 
  29 |     async searchCustomer(email : string){
  30 |         await this.emailSearch.waitFor({ state: 'visible', timeout: 20000});
  31 |         await this.emailSearch.pressSequentially(email);
  32 |          await this.filterButton.click();
  33 |     }
  34 | 
  35 |     async getCustomerEmail(): Promise<string>{
  36 |         await this.page.waitForTimeout(5000);
  37 |         // await this.searchEmail.waitFor({ state: 'visible', timeout: 20000 });
  38 |         return (await this.searchEmail.textContent() ?? '');
  39 |     }
  40 | 
  41 |     async openCustomerDetails(){
  42 |         await this.searchEditButton.click();
> 43 |         await this.page.waitForTimeout(5000);
     |                         ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  44 |     }
  45 | 
  46 |     async getCustomerFirstName(){
  47 |         return await this.custFirstName.inputValue();
  48 |     }
  49 | 
  50 |     async getCustomerLastName(){
  51 |         return await this.custLastName.inputValue();
  52 |     }
  53 | 
  54 |     async getCustomerEmailAfterOpen(){
  55 |         return await this.custEmail.inputValue();
  56 |     }
  57 | 
  58 |     async getStatusValue() : Promise<boolean> {
  59 |         return (await this.statusToggle.isChecked());
  60 |     }
  61 |     
  62 | }
```