import {MainPage} from "./mainPage";
import {Page} from "playwright";
import {ExamplePage} from "./examplePage";

export class Pages {
    private readonly _mainPage: MainPage;
    private readonly _examplePage: ExamplePage;

    constructor(page: Page) {
        this._mainPage = new MainPage(page);
        this._examplePage = new ExamplePage(page);
    }

    get mainPage(): MainPage {
        return this._mainPage;
    }

    get examplePage(): ExamplePage {
        return this._examplePage;
    }
}