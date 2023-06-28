import { convertEmailToPrefix } from "../email";

describe("convertEmailToPrefix", () => {
  it("should convert the email address to a prefix string", () => {
    const email = "john.doe@example.com";
    expect(convertEmailToPrefix(email)).toEqual("john_doe_example");
  });

  it("should replace special characters in the prefix with underscores", () => {
    const email = "john-doe@example.com";
    expect(convertEmailToPrefix(email)).toEqual("john_doe_example");
  });

  it("should handle emails with multiple subdomains", () => {
    const email = "john.doe@test.example.com";
    expect(convertEmailToPrefix(email)).toEqual("john_doe_test_example");
  });

  it("should handle emails without a domain", () => {
    const email = "john.doe@";
    expect(convertEmailToPrefix(email)).toEqual("");
  });

  it("should handle invalid email formats", () => {
    const email = "invalid_email";
    expect(convertEmailToPrefix(email)).toEqual("");
  });
});
