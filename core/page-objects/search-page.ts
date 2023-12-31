import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class SearchPage extends BasePage {
    private showMore = By.xpath('//button[@data-test-id="show-all"]');

    constructor(driver: WebDriver) {
        super(driver);
    }
    async showMoreOptions() {
        await this.findElementAndClick(this.showMore);
        await this.driver.sleep(1200);
    }
}
