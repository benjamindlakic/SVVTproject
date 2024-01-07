import { HomePage } from "../core/page-objects/home-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
}, 15000);

test("user registration", async () => {
    await homePage.closeCookies();
    await homePage.getStartedButton();
    await homePage.emailLoginButton();
    await homePage.enterEmail();
    await homePage.continueButton();
    await homePage.enterPassword();
    await homePage.continueButton();
    await homePage.enterName();
    await homePage.continueButton();
    await homePage.enterAddress();
    await homePage.clickAddressPin();
}, 25000);

afterAll(async () => {
    await driver.quit();
}, 5000);