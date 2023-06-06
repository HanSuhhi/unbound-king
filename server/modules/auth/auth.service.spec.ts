import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import type { Cache } from "cache-manager";
import { AuthService } from "./auth.service";

describe("AuthService", () => {
  const TEST_EMAIL = "test@test.test";
  let service: AuthService;
  let cacheConfig: Cache;

  beforeEach(async () => {
    vi.useFakeTimers();
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, {
        provide: CACHE_MANAGER,
        useValue: {
          get: () => "",
          set: vi.fn()
        }
      }]
    }).compile();

    service = module.get<AuthService>(AuthService);
    cacheConfig = module.get<Cache>(CACHE_MANAGER);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("createEmailAuthCode", () => {
    it("should generate a 6-digit number", async () => {
      const code = service.createEmailAuthCode(TEST_EMAIL);
      assert(code >= 100000 && code <= 999999);
      assert.strictEqual(code.toString().length, 6);
    });

    it("should set the code in the cache", () => {
      const spy = vi.spyOn(cacheConfig, "set");

      const code = service.createEmailAuthCode(TEST_EMAIL);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy.mock.calls[0][0]).toEqual(TEST_EMAIL);
      expect(spy.mock.calls[0][1]).toEqual(code);
    });

    it("should generate a new code each time", async () => {
      const code1 = service.createEmailAuthCode(TEST_EMAIL);
      const code2 = service.createEmailAuthCode(TEST_EMAIL);
      assert.notStrictEqual(code1, code2);
    });
  });
});
