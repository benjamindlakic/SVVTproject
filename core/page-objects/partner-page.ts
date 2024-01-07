import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class PartnerPage extends BasePage {
    private bosnia = By.xpath('/html/body/div[2]/a[3]');
    private postaniPartner = By.className('menu-item nav-item btn-item ml-auto');

    private cityField = By.xpath('//form[@class="signupForm"]//div//input[@placeholder="Grad"]');
    private companyName = By.xpath('//form[@class="signupForm"]//input[@placeholder="Naziv tvrtke"]');
    private partnerName = By.xpath('//form[@class="signupForm"]//input[@placeholder="Ime"]');
    private partnerSurname = By.xpath('//form[@class="signupForm"]//input[@placeholder="Prezime"]');
    private partnerEmail = By.xpath('//form[@class="signupForm"]//input[@placeholder="E-adresa"]');
    private partnerNumber = By.xpath('//form[@class="signupForm"]//input[@placeholder="Telefon"]');
    private typeOfStore = By.xpath('//form[@class="signupForm"]//select[@id="vertical"]');
    private restaurantType = By.xpath('//form[@class="signupForm"]//select[@id="vertical"]//option[@value="Restaurant"]');
    private nextButton = By.xpath('//form[@class="signupForm"]//div[@class="submitBtnWrapper"]//button[@id="landing_submitted"]');

    constructor(driver: WebDriver) {
        super(driver);
    }
    async bosniaPartner() {
        await this.findElementAndClick(this.bosnia);
        await this.driver.sleep(1500);
    }
    async becomePartnerBh() {
        await this.findElementAndClick(this.postaniPartner);
        await this.driver.sleep(1000);
    }
    async setCityField() {
        await this.fillInputField(this.cityField, testData.partner.city);
        await this.driver.sleep(1000);
    }
    async setCompanyName() {
        await this.fillInputField(this.companyName, testData.partner.company);
        await this.driver.sleep(1000);
    }
    async setPartnerName() {
        await this.fillInputField(this.partnerName, testData.partner.partnerName);
        await this.driver.sleep(1000);
    }
    async setPartnerSurname() {
        await this.fillInputField(this.partnerSurname, testData.partner.partnerSurname);
        await this.driver.sleep(1000);
    }
    async setPartnerEmail() {
        await this.fillInputField(this.partnerEmail, testData.partner.partnerEmail);
        await this.driver.sleep(1000);
    }
    async setPartnerNumber() {
        await this.fillInputField(this.partnerNumber, testData.partner.number);
        await this.driver.sleep(1000);
    }
    async storeTypes() {
        await this.findElementAndClick(this.typeOfStore);
        await this.driver.sleep(1000);
    }    
    async selectStoreType() {
        await this.findElementAndClick(this.restaurantType);
        await this.driver.sleep(1000);
    }
    async continueButton() {
        await this.findElementAndClick(this.nextButton);
        await this.driver.sleep(1000);
    }
}
