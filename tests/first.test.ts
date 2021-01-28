import {MainPage} from "../pages/mainPage";
import {initializeBrowser} from "../config/init";
import config from "../config/config";
import {Browser} from "playwright";
import {BasicWebPageExamplePage} from "../pages/basicWebPageExamplePage";

describe('BasicWebPageExample page check',() => {
    let browserInstance: Browser;
    let mainPage: MainPage;
    let basicWebPageExamplePage: BasicWebPageExamplePage;

    beforeAll(async() => {
        browserInstance = await initializeBrowser(config);
        const context = await browserInstance.newContext();
        const page = await context.newPage();
        mainPage = new MainPage(page);
        basicWebPageExamplePage = new BasicWebPageExamplePage(page);
    })

    it('should navigate to BasicWebPageExample page', async() => {
        await mainPage.navigate();
        await mainPage.openBasicWebPageExample();
    })

    it("should check content of first paragraph", async() => {
        await mainPage.navigate();
        await mainPage.openBasicWebPageExample();
        expect(await basicWebPageExamplePage.getFirstParagraphText())
            .toContain(basicWebPageExamplePage.firstParagraphValue);
    })

    afterAll(async() => {
        await browserInstance.close();
    })
})
