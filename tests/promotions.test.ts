import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { HomePage } from "../core/page-objects/home-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
}, 10000);

test("promotion check", async () => {
    await homePage.closeCookies();
    await homePage.getStartedButton();
    await homePage.emailLoginButton();
    await homePage.enterEmail();
    await homePage.continueButton();
    await homePage.enterLoginPassword();
    await homePage.clickLoginButton();
    await homePage.enterAddress();
    await homePage.clickAddressPin();
    await homePage.dropProfileDown();
    await homePage.turnOnPromomtions();
}, 25000);

afterAll(async () => {
    await driver.quit();
}, 5000);