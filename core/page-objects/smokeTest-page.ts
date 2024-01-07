import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class SmokeTest extends BasePage {
    private kfc = By.xpath('//a[@href="/ba/en/sarajevo/kfc-sarajevo-123/"]');
    private topSellers = By.xpath('//div[@class="image-preview-card"]//a[@href="/ba/en/sarajevo/kfc-sarajevo-123/?content=top-sellers-ts"]');
    private wingsBucket = By.xpath('/html/body/div[1]/div/div/div[1]/div/div/div/section[1]/div[2]/div/div[3]/div[2]/div[2]/div/div[1]/div/div[2]/div[5]/div[1]');
    private addFood = By.className('helio-button custom-submit primary');
    private orderButton = By.className('helio-button cart-products__button block unelevated');
    private confirmAddress = By.className('helio-button footer__button primary helio-button--wide');
    private goToCheckout = By.className('helio-button footer--confirm primary');
    private phoneNumber = By.xpath('//div[@class="input-button__text-box"]//p[@data-test-id="contact-info-placeholder"]');
    private inputPhoneNumber = By.xpath('//div[@class="iti"]//input[@class="helio-input__input"]');
    private continueButton = By.className('helio-button mt-2 block primary')

    constructor(driver: WebDriver) {
        super(driver);
    }
    async clickKfc() {
        await this.findElementAndClick(this.kfc);
        await this.driver.sleep(1500);
    }
    async selectTopSellers() {
        await this.findElementAndClick(this.topSellers);
        await this.driver.sleep(1500);
    }
    async clickWingBucket() {
        await this.findElementAndClick(this.wingsBucket);
        await this.driver.sleep(1500);
    }
    async addFoodCart() {
        await this.findElementAndClick(this.addFood);
        await this.driver.sleep(1500);
    }
    async orderFood() {
        await this.findElementAndClick(this.orderButton);
        await this.driver.sleep(1500);
    }
    async clickConfirmAddress() {
        await this.findElementAndClick(this.confirmAddress);
        await this.driver.sleep(1500);
    }
    async clickCheckout() {
        await this.findElementAndClick(this.goToCheckout);
        await this.driver.sleep(1500);
    }
    async setPhoneNumber() {
        await this.findElementAndClick(this.phoneNumber);
        await this.driver.sleep(1500);
    }
    async insertPhoneNumber() {
        await this.fillInputField(this.inputPhoneNumber, testData.credentials.phone);
        await this.driver.sleep(1500);
    }
    async continueToOrder() {
        await this.findElementAndClick(this.continueButton);
        await this.driver.sleep(1500);
    }
}


