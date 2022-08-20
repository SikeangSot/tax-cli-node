import taxCalculate from "../src/taxCalculator";

describe("the tax calculator", () => {
  it("the tax calculator should not be undefined", () => {
    expect(taxCalculate).not.toBe(undefined);
  });
});
