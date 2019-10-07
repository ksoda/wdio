import { strict as assert } from "assert";

describe("webdriver.io page", () => {
  it("should have the right title", () => {
    browser.url("https://webdriver.io");
    const title = browser.getTitle();
    assert.equal(
      title,
      "WebdriverIO · Next-gen WebDriver test framework for Node.js"
    );
    assert.equal((browser as any).checkFullPageScreen("fullPage", {}), 0);
  });
});
