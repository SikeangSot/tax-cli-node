import { generateTaxReport } from "../src/index";

const amountDeclare = 944;
describe("the tax parser", () => {
  it("tax parser should not be undefined", () => {
    expect(generateTaxReport).not.toBe(undefined);
  });
});
