import {Page , Locator} from '@playwright/test';

export class SuccessPage {
    private readonly page: Page;
    //locators
    private readonly successPageHeader: Locator;
    private readonly continueButton: Locator;

    constructor(page: Page){
        this.page= page;
        //Initialize locator
        this.successPageHeader  = page.getByRole('heading', { name: 'Your Account Has Been Created!' });
        this.continueButton = page.getByRole('link',{ name : 'Continue'});
    }

   

    async isSucccessPageExists(): Promise<boolean> {
    try {
        await this.successPageHeader.waitFor({
            state: 'visible',
            timeout: 15000,
        });

        return true;
    } catch (error) {
        console.log(`Error checking success page header visibility: ${error}`
        );
        return false;
    }
}

    async getSuccessMessage():Promise<string | null>  {
        return await this.successPageHeader.textContent();
    }

    async clickContinueButton() {
        await this.continueButton.click();
    }

    async getCurrentUrl() : Promise<string>{
        return await this.page.url();
    }
}

