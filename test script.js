const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost/selenium-test/login.html");
    await driver.findElement(By.id("username")).sendKeys("student");
    await driver.findElement(By.id("password")).sendKeys("12345");
    await driver.findElement(By.id("loginBtn")).click();

    let element = await driver.findElement(By.id("message"));
    let actualText = await element.getText();
    let expectedText = "Login Successful";

    assert.strictEqual(actualText, expectedText, "Text mismatch!");

    console.log("Assertion passed!");
  } finally {
    await driver.quit();
  }
}
example();
