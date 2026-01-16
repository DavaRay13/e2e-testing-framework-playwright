import { Page, Locator } from "@playwright/test";

export class ProductPage{
    readonly backpackAddToCartBtn: Locator;
    readonly cartBadge: Locator;

    constructor(private readonly page: Page) {
        this.backpackAddToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartBadge = page.locator('[data-test="continue-shopping"]');
    }

    async tambahBackpackKeKeranjang(){
        await this.backpackAddToCartBtn.click();
    }

    async dapatkanJumlahKeranjang(){
        return await this.cartBadge.innerText();
    }
}