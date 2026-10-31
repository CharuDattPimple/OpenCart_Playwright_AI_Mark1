//Created using Prompts
import { test, expect } from '../../fixtures/pageFixtures';

test('Verify empty cart prevents checkout progression @master @web', async ({ page, homePage, shoppingCartPage }) => {
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

        const isContinueLinkVisible = await shoppingCartPage.isContinueShoppingLinkVisible();
        expect(isContinueLinkVisible).toBeTruthy();
    });

    await test.step('2) User attempts to proceed to checkout', async () => {
        await shoppingCartPage.clickCheckout();
    });

    await test.step('3) User verifies checkout has not progressed and the cart remains empty', async () => {
        await expect(page).toHaveURL(/route=checkout\/cart(?:&|$)/);

        const emptyCartMessage = await shoppingCartPage.getEmptyCartMessageText();
        expect(emptyCartMessage).toBe('Your shopping cart is empty!');
    });
});
