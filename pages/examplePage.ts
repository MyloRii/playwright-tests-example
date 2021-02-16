import {Page} from "playwright";

export class ExamplePage {
    private page: Page;
    readonly firstParagraph = `#para1`;
    readonly firstParagraphValue = 'A paragraph of text';

    constructor(page: Page) {
        this.page = page;
    };

    getFirstParagraphText() {
        return this.page.innerText(this.firstParagraph);
    }
}