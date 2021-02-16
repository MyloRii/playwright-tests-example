import {folio as base} from "folio";
import {Browser, chromium} from "playwright";
import {Pages} from "../pages/pages"

const fixtures = base.extend<{ browser: Browser, pages: Pages }>();

fixtures.browser.init(async ({}, run) => {
    const browser = await chromium.launch({
        headless: false,
    });
    await run(browser);
})

fixtures.pages.init(async ({browser}, run) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const pages = new Pages(page);
    await run(pages);
})

const folio = fixtures.build();

export const it = folio.it;
export const describe = folio.describe;
