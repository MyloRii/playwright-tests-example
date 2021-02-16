import {describe, it} from "../config/fixture";
import {expect} from "@playwright/test";

describe('UI tests', () => {

    it('should navigate to BasicWebPageExample page', async ({browser, pages}) => {
        await pages.mainPage.navigate();
        await pages.mainPage.openBasicWebPageExample();
    })

    it("should check content of first paragraph", async ({browser, pages}) => {
        await pages.mainPage.navigate();
        await pages.mainPage.openBasicWebPageExample();

        expect(await pages.examplePage.getFirstParagraphText())
            .toContain(pages.examplePage.firstParagraphValue);
    })
})