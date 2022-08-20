import { generateTaxReport } from "../src/index";

describe("the tax parser", () => {
  it("tax parser should not be undefined", () => {
    expect(generateTaxReport).not.toBe(undefined);
  });
});
