import { test } from '@playwright/test';

test.describe('Input test', () => {
    test("Bai 01: User registration", async ({ page }) => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('//a[@href="01-xpath-register-page.html"]').click();

        await (page.locator('//input[@id="username"]'))
            .pressSequentially("lando", { delay: 300, timeout: 30000 });
        await (page.locator('//input[@id="email"]'))
            .pressSequentially("lanndo402@gmail.com", { delay: 300, timeout: 30000 });
        await (page.locator('//input[@id="female"]')).check();
        await (page.locator('//input[@id="traveling"]')).check();
        await (page.locator('//select[@id="interests"]')).selectOption({ label: "Music" });
        await (page.locator('//select[@id="country"]')).selectOption("canada");
        await (page.locator('//input[@id="dob"]')).fill("1999-02-04");
        await (page.locator('//input[@id="profile"]')).setInputFiles("tests/demo/profile01.jpg");
        await (page.locator('//textarea[@id="bio"]')).fill('Tôi đang học automation test với Playwright');
        await (page.locator('//button[@type="submit"]')).click();

    })
}
)
