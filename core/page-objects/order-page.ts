import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class OrderPage extends BasePage {
    private tajMahal = By.xpath('//div[@data-test-id="category-store-card"]//a[@href="/ba/en/sarajevo/taj-mahal-srv/"]//div[@class="store-card__container"]');
    private tikkaMasala = By.xpath('//div[@id="piletina-s.2109748227"]//div[@class="list__container"]//div[@data-test-id="list-element"]//div[@data-test-id="product-row-content"]//div[@class="product-row__content"]//div[@class="product-row__info"]//div[@class="product-row__name"]//span[@data-test-id="product-row-name__highlighter"]//span[@text="Chicken tikka masala"]');
    private butterNaan = By.xpath('//*[@id="1803054562"]/div[2]/div[1]/div/div');
    private addFood = By.className('helio-button custom-submit primary');

    constructor(driver: WebDriver) {
        super(driver);
    }
    async clickTajMahal() {
        await this.findElementAndClick(this.tajMahal);
        await this.driver.sleep(1500);
    }
    async selectFood() {
        await this.findElementAndClick(this.tikkaMasala);
        await this.driver.sleep(1500);
    }
    async addFoodCart() {
        await this.findElementAndClick(this.addFood);
        await this.driver.sleep(1500);
    }
}
