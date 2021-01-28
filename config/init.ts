import {Browser, chromium} from "playwright";
import config from "./config";

export async function initializeBrowser(config: any) {
    const browser: Browser = await chromium.launch({
        headless: false,
    });
    return browser;
}