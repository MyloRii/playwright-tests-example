import {Page} from "playwright";
import {home} from "../config/url";

export class MainPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    };

    async navigate() {
        await this.page.goto(home);
    };

    async openBasicWebPageExample() {
        await this.page.click('#basicpagetest');
    }
}