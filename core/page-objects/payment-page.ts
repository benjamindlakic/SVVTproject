import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class PaymentPage extends BasePage {
    private cardNameHolder = By.id('cardholdername');
    private cardNumber = By.id('//div[@data-processout-input="cc-number"]//iframe[@class="processout-field-cc-iframe"]');
    private cardExpire = By.id('in-month-year');
    private cardCCV = By.id('in-cvc');

    constructor(driver: WebDriver) {
        super(driver);
    }
    async setCardHolderName() {
        await this.fillInputField(this.cardNameHolder, testData.payment.cardName);
    }
    async setCardNumber() {
        await this.fillInputField(this.cardNumber, testData.payment.cardNumber);
    }
    async setCardExpireDate() {
        await this.fillInputField(this.cardExpire, testData.payment.mmyy);
    }
    async setCardCCV() {
        await this.fillInputField(this.cardCCV, testData.payment.ccv);
    }
}
