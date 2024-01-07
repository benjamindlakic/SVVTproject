import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { HomePage } from "../core/page-objects/home-page";
import { PartnerPage } from "../core/page-objects/partner-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let partnerPage: PartnerPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    partnerPage = new PartnerPage(driver);
}, 10000);

test("becoming a partner", async () => {
    await homePage.closeCookies();
    await homePage.getStartedButton();
    await homePage.emailLoginButton();
    await homePage.enterEmail();
    await homePage.continueButton();
    await homePage.enterLoginPassword();
    await homePage.clickLoginButton();
    await homePage.enterAddress();
    await homePage.clickAddressPin();
    await homePage.becomeAPartner();
    await partnerPage.bosniaPartner();
    await partnerPage.becomePartnerBh();
    await partnerPage.setCityField();
    await partnerPage.setCompanyName();
    await partnerPage.setPartnerName();
    await partnerPage.setPartnerSurname();
    await partnerPage.setPartnerEmail();
    await partnerPage.setPartnerNumber();
    await partnerPage.storeTypes();
    await partnerPage.selectStoreType();
    await partnerPage.continueButton();
}, 45000);

afterAll(async () => {
    await driver.quit();
}, 5000);