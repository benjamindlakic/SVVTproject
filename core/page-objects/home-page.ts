import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class HomePage extends BasePage {
    // Pitati da li moze ovo ovako, ili za svaki ovaj test file mora imati corresponding page.ts

    private logo = By.className("glovo-logo header-logo__brand");
    private getStarted = By.className('helio-button get-started-button block primary');
    private loginButton = By.xpath('//button[@data-test-id="submit-button"]');
    private emailButton = By.xpath('//*[@id="base-modal"]/div/div[2]/div/div/div[2]/button');

    // Cookie button
    private cookieButton = By.className('onetrust-close-btn-handler onetrust-close-btn-ui banner-close-button ot-close-icon');

    private inputField = By.className('helio-input__input');

    private continue = By.xpath('//*[@id="base-modal"]/div/div[2]/div/div/form/button');
    private addressPin = By.className('address-details-card__content');

    private searchBar = By.className('text-giant');

    // Edit Profile test
    private profileLogo = By.xpath('//img[@data-e2e-id="user-profile-trigger"]');
    private editName = By.xpath('//div[@data-e2e-id="profile-popover-profile"]//span');
    private profileName = By.xpath('//div[@data-e2e-id="personal-details-name"]//div[@class="helio-input helio-input--has-placeholder-moved helio-input--with-separator"]//div[@class="helio-input__content"]//div[@class="helio-input__controls"]//input[@class="helio-input__input"]');
    private clearButton = By.xpath('/html/body/div[1]/div/div/div[3]/div/div/div[2]/div[2]/div[1]/div/div[1]/div/div/button');
    private saveButton = By.className('helio-button personal-details__cta primary');

    // Sorting test
    private foodButton = By.xpath('//div[@data-test-id="category-bubble-food"]');
    private restaurants = By.xpath('//a[@href="/ba/en/sarajevo/restaurants_1/"]');

    // Promotions test
    private promotionsSwitch = By.className('helio-switch');

    // Partner test
    private becomePartner = By.xpath('//a[@href="https://sell.glovoapp.com"]//button[@class="helio-button corporate-element__button primary"]');

    // Rider test
    private becomeRider = By.xpath('//a[@href="https://couriers.glovoapp.com/ba/"]//button[@class="helio-button corporate-element__button primary"]');

    // Contact test
    private contactUs = By.xpath('//span[@data-test-id="footer-support"]');
    private problemType = By.className('card-big-with-image');
    private accountDetails = By.xpath('/html/body/div[1]/div/div/div[3]/div/div/div/div/div/div[2]/div/div[3]/div/div');
    private emailAddress = By.xpath('/html/body/div[1]/div/div/div[3]/div/div/div/div/div/div[2]/div/div[3]/div/ul/li[2]');

    // Payment test
    private addCard = By.className('account-add-credit-card__card');

    constructor(driver: WebDriver) {
        super(driver);
    }
    async navigateToHomePage() {
        await this.driver.findElement(this.logo).click();
    }
    async getStartedButton() {
        await this.findElementAndClick(this.getStarted);
        await this.driver.sleep(1000);
    }
    async emailLoginButton() {
        await this.findElementAndClick(this.emailButton);
        await this.driver.sleep(1000);
    }
    async enterEmail() {
        await this.fillInputField(this.inputField, testData.data.email);
        await this.driver.sleep(1000);
    }
    async enterSmokeEmail() {
        await this.fillInputField(this.inputField, testData.data.smokeEmail);
        await this.driver.sleep(1000);
    }
    async continueButton() {
        await this.findElementAndClick(this.continue);
        await this.driver.sleep(1000);
    }
    async enterPassword() {
        await this.fillInputField(this.inputField, testData.credentials.password);
        await this.driver.sleep(1000);
    }
    async enterLoginPassword() {
        await this.fillInputField(this.inputField, testData.credentials.password);
        await this.driver.sleep(1000);
    }
    async clickLoginButton() {
        await this.findElementAndClick(this.loginButton);
        await this.driver.sleep(1000);
    }
    async enterName() {
        await this.fillInputField(this.inputField, testData.credentials.name);
        await this.driver.sleep(1000);
    }
    async enterAddress() {
        await this.driver.sleep(1500);
        await this.fillInputField(this.inputField, testData.address.address);
        await this.driver.sleep(1000);
    }
    async clickAddressPin() {
        await this.findElementAndClick(this.addressPin);
        await this.driver.sleep(1000);
    }
    async searchBarEngine() {
        await this.fillInputField(this.searchBar, testData.foods.food);
        await this.driver.sleep(1000);
    }
    async dropProfileDown() {
        await this.findElementAndClick(this.profileLogo);
        await this.driver.sleep(1000);
    }
    async editProfileName() {
        await this.findElementAndClick(this.editName);
        await this.driver.sleep(1000);
    }
    async clearProfileName() {
        await this.findElementAndClick(this.clearButton);
        await this.driver.sleep(1000);
    }
    async newProfileName() {
        await this.fillInputField(this.profileName, testData.newData.newName);
        await this.driver.sleep(1000);
    }
    async saveNewName() {
        await this.findElementAndClick(this.saveButton);
        await this.driver.sleep(1000);
    }
    async closeCookies() {
        await this.driver.sleep(1500);
        await this.findElementAndClick(this.cookieButton);
    }
    async openFoodSection() {
        await this.driver.sleep(700);
        await this.findElementAndClick(this.foodButton);
        await this.driver.sleep(1000);
    }
    async showRestaurants() {
        await this.findElementAndClick(this.restaurants);
        await this.driver.sleep(1000);
    }
    async turnOnPromomtions() {
        await this.findElementAndClick(this.promotionsSwitch);
        await this.driver.sleep(1000);
    }
    async becomeAPartner() {
        await this.driver.sleep(1500);
        await this.findElementAndClick(this.becomePartner);
        await this.driver.sleep(1000);
    }
    async becomeARider() {
        await this.findElementAndClick(this.becomeRider);
        await this.driver.sleep(1000);
    }
    async clickContact() {
        await this.driver.sleep(1500);
        await this.findElementAndClick(this.contactUs);
        await this.driver.sleep(1000);
    }
    async selectProblem() {
        await this.findElementAndClick(this.problemType);
        await this.driver.sleep(1000);
    }
    async accountDetailsProblem() {
        await this.findElementAndClick(this.accountDetails);
        await this.driver.sleep(1000);
    }
    async changeEmailAddress() {
        await this.findElementAndClick(this.emailAddress);
        await this.driver.sleep(1000);
    }
    async clickAddCard() {
        await this.findElementAndClick(this.addCard);
        await this.driver.sleep(1000);
    }
}
