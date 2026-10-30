import { Page, Locator } from '@playwright/test';

export class ProductPage {
    private readonly page: Page;

    private readonly inputQuantity: Locator;
    private readonly addToCartButton: Locator;
    private readonly successMessage: Locator;


    constructor(page: Page) {
        this.page = page;
        this.inputQuantity = page.locator('#input-quantity');
        this.addToCartButton = page.getByRole('button', { name: 'Add to Cart' });
        this.successMessage = page.locator('.alert-success');
    }

    async enterQuantity(quantity: string): Promise<void> {
        await this.inputQuantity.waitFor({ state: 'visible', timeout: 15000 });
        await this.inputQuantity.clear();
        await this.inputQuantity.pressSequentially(quantity);
        await this.inputQuantity.press('Tab');
    }

    async getEnterQuantitiy(){
        const actualQuantity = await this.inputQuantity.inputValue();
        return await actualQuantity;
    }

    async clickAddToCart(): Promise<void> {
        await this.addToCartButton.first().waitFor({ state: 'visible', timeout: 10000 });
        await this.addToCartButton.first().click();
    }

    async getSuccessMessage() {
        return await this.successMessage.textContent();
    }

    async isSuccessMessageVisible(): Promise<boolean> {
        try {
            await this.successMessage.waitFor({ state: 'visible', timeout: 15000 });
            return true;
        } catch (error) {
            console.log(`Error checkin success message : ${error}`);
            return false;
        }

    }
}