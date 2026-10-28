import {Page, Locator} from '@playwright/test';

export class CustomersPage{

    private readonly page:Page;
    private readonly emailSearch:Locator;
    private readonly filterButton:Locator;
    private readonly searchEmail:Locator;
    private readonly searchEditButton: Locator;
    private readonly custFirstName: Locator;
    private readonly custLastName: Locator;
    private readonly custEmail: Locator;
    private readonly statusToggle: Locator;

    constructor(page: Page){
        this.page= page;
        this.emailSearch = page.getByRole('textbox', { name: 'E-Mail' })
        this.filterButton = page.getByRole('button',{name: ' Filter'});
        // this.searchEmail = page.locator('.table-bordered tbody tr td:nth-child(3)');
          this.searchEmail = page.locator('.table-bordered tbody tr').first().locator('td').nth(2);
        this.searchEditButton = page.getByRole('link', { name: 'Edit' })
        this.custFirstName = page.getByRole('textbox', { name: '* First Name' });
        this.custLastName = page.getByRole('textbox', { name: '* Last Name' });
        this.custEmail = page.getByRole('textbox', { name: '* E-Mail' });
        this.statusToggle = page.locator('#input-status')
        
    }

    async searchCustomer(email : string){
        await this.emailSearch.waitFor({ state: 'visible', timeout: 20000});
        await this.emailSearch.pressSequentially(email);
         await this.filterButton.click();
    }

    async getCustomerEmail(): Promise<string>{
        await this.page.waitForTimeout(5000);
        // await this.searchEmail.waitFor({ state: 'visible', timeout: 20000 });
        return (await this.searchEmail.textContent() ?? '');
    }

    async openCustomerDetails(){
        await this.searchEditButton.click();
        await this.page.waitForTimeout(5000);
    }

    async getCustomerFirstName(){
        return await this.custFirstName.inputValue();
    }

    async getCustomerLastName(){
        return await this.custLastName.inputValue();
    }

    async getCustomerEmailAfterOpen(){
        return await this.custEmail.inputValue();
    }

    async getStatusValue() : Promise<boolean> {
        return (await this.statusToggle.isChecked());
    }
    
}