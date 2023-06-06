import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { AuthService } from "./auth.service";

describe("AuthService", () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService]
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("createEmailAuthCode", () => {
    it("should generate a 6-digit number", async () => {
      const code = await service.createEmailAuthCode();
      assert(code >= 100000 && code <= 999999);
      assert.strictEqual(code.toString().length, 6);
    });

    it("should generate a new code each time", async () => {
      const code1 = await service.createEmailAuthCode();
      const code2 = await service.createEmailAuthCode();
      assert.notStrictEqual(code1, code2);
    });
  });
});
