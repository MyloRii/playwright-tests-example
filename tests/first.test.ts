import {MainPage} from "../pages/mainPage";
import {BasicWebPageExamplePage} from "../pages/basicWebPageExamplePage";
import {it} from "../config/fixture";
import {expect} from "@playwright/test";

    it('should navigate to BasicWebPageExample page', async({browser}) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        let mainPage = new MainPage(page);
        await mainPage.navigate();
        await mainPage.openBasicWebPageExample();
    })

    it("should check content of first paragraph", async({browser}) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        let mainPage = new MainPage(page);
        let basicWebPageExamplePage = new BasicWebPageExamplePage(page);
        await mainPage.navigate();
        await mainPage.openBasicWebPageExample();
        expect(await basicWebPageExamplePage.getFirstParagraphText())
            .toContain(basicWebPageExamplePage.firstParagraphValue);
    })
