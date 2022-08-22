import parser from "../src/taxParser.js";

const user = 123;
const existingUser = 8143;
const type = "payroll";
const lines = [
  "8143,	2021/12/abababbba-95272, 	2021-11-23T15:32:57.458,		 156.88,		CAPITOL_GAIN",
  "8143,	2010/12/abbbabaab-11108, 	 2021-11-24T10:32:57.519,	542.87,	PAYROLL",
  "8143,       2021/10/baaaaabaa-10067,	2021-11-24T20:32:57.540, 401.16,	 PAYROLL"
];

const amountDeclare = 944.03;
describe("the tax parser", () => {
  it("tax parser should not be undefined", () => {
    expect(parser).not.toBe(undefined);
  });
  it("tax parser should return 0 if user  not found", () => {
    const result = parser(user, type);
    expect(result(lines)).toBe(0);
  });
  it("tax parser should return exact amount that user has declared", () => {
    const result = parser(existingUser, type);
    const totalAmountDeclare = lines.reduce(
      (acc, nextValue) => acc + result(nextValue)
      , 0);

    expect(totalAmountDeclare).toBe(amountDeclare);
  });
});
