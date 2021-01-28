import {Page} from "playwright";
import {basicWebPageExample} from "../config/url";

export class BasicWebPageExamplePage {
    private page: Page;
    readonly firstParagraph = `#para1`;
    readonly firstParagraphValue = 'A paragraph of text';

    constructor(page: Page) {
        this.page = page;
    };

    async navigate() {
        await this.page.goto(basicWebPageExample);
    };

    getFirstParagraphText() {
        return this.page.innerText(this.firstParagraph);
    }
}