import { test } from '@playwright/test';

test.describe('Input test', () => {
    test("Bai 03: Todo page ", async ({ page }) => {
        await page.goto('https://material.playwrightvn.com/');
        await page.click('//a[@href="03-xpath-todo-list.html"]');
        
        // Xử lý dialog trước khi thực hiện các hành động khác trên trang
        page.on('dialog', async dialog => {
            await dialog.accept();
        });

        for (let i = 1; i <= 10; i++) {
            await page.locator('//input[@id="new-task"]').fill(`Todo ${i}`);
            await page.locator('//button[@id="add-task"]').click();
            if (i % 2 !== 0) {
                await page.click(`//button[@id="todo-${i}-delete"]`);

            }
        }
    });
});
