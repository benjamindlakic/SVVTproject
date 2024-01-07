import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class SortPage extends BasePage {
    private sortedList = By.xpath('//div[@class="filters-section__option"]//a[@href="/ba/en/sarajevo/restaurants_1/?sortingId=3&sort=best-rated"]');

    constructor(driver: WebDriver) {
        super(driver);
    }
    async bestRatedRestaurants() {
        await this.findElementAndClick(this.sortedList);
        await this.driver.sleep(1500);
    }
}
