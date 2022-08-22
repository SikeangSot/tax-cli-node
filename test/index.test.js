import generateTaxReport from "../src/index";

describe("the generate tax report", () => {
  it("the generate tax report should not be undefined", () => {
    expect(generateTaxReport).not.toBe(undefined);
  });
});
