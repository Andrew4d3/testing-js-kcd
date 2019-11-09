// (1) Here we have a test that is using the ES6 import syntax
// Unfortunately we're unable to use import statements natively with Jest. That's why we need to use configure it using babel
import { getFormattedValue } from "../utils";

test("formats the value", () => {
  expect(getFormattedValue("1234.0")).toBe("1,234.0");
});
