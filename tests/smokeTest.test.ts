import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { HomePage } from "../core/page-objects/home-page";
import { SmokeTest } from "../core/page-objects/smokeTest-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let smoke: SmokeTest;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    smoke = new SmokeTest(driver);
}, 10000);

test("testing contact", async () => {
    await homePage.closeCookies();
    await homePage.getStartedButton();
    await homePage.emailLoginButton();
    await homePage.enterSmokeEmail();
    await homePage.continueButton();
    await homePage.enterLoginPassword();
    await homePage.clickLoginButton();
    await homePage.enterAddress();
    await homePage.clickAddressPin();
    await homePage.openFoodSection();
    await homePage.showRestaurants();
    await smoke.clickKfc();
    await smoke.selectTopSellers();
    await smoke.clickWingBucket();
    await smoke.addFoodCart();
    await smoke.orderFood();
    await smoke.clickConfirmAddress();
    await smoke.clickCheckout();
    await smoke.setPhoneNumber();
    await smoke.insertPhoneNumber();
    await smoke.continueToOrder();
    await driver.sleep(2000);
}, 55000);

afterAll(async () => {
    await driver.quit();
}, 5000);