import {folio as base} from "folio";
import {Browser, chromium} from "playwright";

const fixtures = base.extend<{ browser: Browser }>();

fixtures.browser.init(async ({}, run) => {
    const browser = await chromium.launch({
        headless: false,
        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
    });
    await run(browser);
})

const folio = fixtures.build();

export const it = folio.it;
