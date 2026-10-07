import { test } from '@playwright/test';

test.describe('Input test', () => {
    test("Bai 04: Personal notes ", async ({ page }) => {
        const noteContent = [
            { action: "click", note: "Hàm click dùng để thực hiện click vào các phần tử trên trang web" },
            { action: "fill", note: "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web" },
            { action: "type", note: "Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng" },
            { action: "hover", note: "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover" },
            { action: "check", note: "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked" },
            { action: "uncheck", note: "Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked" },
            { action: "selectOption", note: "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown" },
            { action: "press", note: "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác" },
            { action: "dblclick", note: "Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web" },
            { action: "dragAndDrop", note: "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web" },

        ];
        await page.goto('https://material.playwrightvn.com/');
        await page.click('//a[@href="04-xpath-personal-notes.html"]');

        for (const content of noteContent) {
            await page.locator('//input[@id="note-title"]').fill(content.action);
            await page.locator('//textarea[@id="note-content"]').fill(content.note);
            await page.locator('//button[@id="add-note"]').click();
        };
        await page.locator('//input[@id="search"]').fill('một hoặc nhiều');

    });
});
