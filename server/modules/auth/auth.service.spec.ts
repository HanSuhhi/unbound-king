import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import type { Cache } from "cache-manager";
import { it } from "vitest";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { HttpException, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import type { LoginDto } from "./dtos/login.dto";
import { LoginRegistration } from "#/composables/constant/request";
import { TrpcRouter } from "@/trpc/trpc.router";
import { useUserModelTestProviders } from "@/composables/tests/providers";

describe("AuthService", () => {
  const TEST_EMAIL = "test@example.com";
  const TEST_CODE = 123456;
  const TEST_USER: LoginDto = {
    email: TEST_EMAIL,
    code: TEST_CODE,
    loginType: LoginRegistration.REGISTRATION
  };
  const token = "generated_token";
  const email = "hello@test.com";

  let trpcRouter: TrpcRouter;
  let jwtService: JwtService;
  let service: AuthService;
  let cacheConfig: Cache;

  beforeEach(async () => {
    vi.useFakeTimers();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        ConfigService,
        {
          provide: JwtService,
          useValue: { signAsync: vi.fn() }
        },
        {
          provide: CACHE_MANAGER,
          useValue: {
            get: (input) => {
              switch (input) {
                case TEST_EMAIL:
                default:
                  return TEST_CODE;
              }
            },
            set: vi.fn(),
            del: vi.fn()
          }
        },
        ...useUserModelTestProviders()
      ]
    }).compile();

    service = module.get<AuthService>(AuthService);
    cacheConfig = module.get<Cache>(CACHE_MANAGER);
    trpcRouter = module.get<TrpcRouter>(TrpcRouter);
    jwtService = module.get<JwtService>(JwtService);
    vi.spyOn(jwtService, "signAsync").mockResolvedValueOnce(token);
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

  describe("register", () => {
    it("should throw error if code does not match", async () => {
      expect(service.register({
        email: TEST_EMAIL,
        code: 123455,
        loginType: LoginRegistration.REGISTRATION
      })).rejects.toThrowError();
    });

    it("should delete the code from the cache", async () => {
      const del = vi.spyOn(cacheConfig, "del");

      await service.register(TEST_USER).catch(() => {});

      expect(del).toHaveBeenCalledTimes(1);
      expect(del.mock.calls[0][0]).toEqual(TEST_EMAIL);
    });

    it("should try to login if user already exists", async () => {
      vi.spyOn(trpcRouter.caller.user, "findOneByEmail").mockResolvedValueOnce({
        ...TEST_USER,
        _id: 111
      } as any);
      const create = vi.spyOn(trpcRouter.caller.user, "createDefaultUserByEmail");
      expect(create).toHaveBeenCalledTimes(0);

      const result = await service.register(TEST_USER);
      expect(result.access_token).toEqual(token);
    });

    it("should create a user and then try to login", async () => {
      const create = vi.spyOn(trpcRouter.caller.user, "createDefaultUserByEmail").mockResolvedValueOnce({
        ...TEST_USER,
        _id: 111
      } as any);

      const result = await service.register({
        email,
        code: TEST_CODE,
        loginType: LoginRegistration.REGISTRATION
      });
      expect(create).toHaveBeenCalledTimes(1);
      expect(result.access_token).toEqual(token);
    });
  });

  describe("login", () => {
    beforeEach(() => {
      vi.spyOn(trpcRouter.caller.user, "findOneByEmail").mockReturnValue(TEST_USER as any);
    });

    it("should throw an exception if the provided code is incorrect and keep code", async () => {
      await expect(
        service.login({ email: TEST_EMAIL, code: 999999, loginType: LoginRegistration.LOGIN })
      ).rejects.toThrow(UnauthorizedException);
      expect(cacheConfig.get(TEST_EMAIL)).toEqual(TEST_CODE);
    });

    it("should throw an exception if the email is not registered", async () => {
      vi
        .spyOn(trpcRouter.caller.user, "findOneByEmail")
        .mockResolvedValueOnce(undefined);

      await expect(service.login(TEST_USER)).rejects.toThrow(HttpException);
    });

    it("should return a JWT token and user roles if the login info is correct", async () => {
      const { access_token, roles } = await service.login(TEST_USER);

      expect(access_token).toEqual(token);
      expect(roles).toEqual(undefined);
    });
  });
});
