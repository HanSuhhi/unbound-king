import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import type { Cache } from "cache-manager";
import { getModelToken } from "@nestjs/mongoose";
import type { Model } from "mongoose";
import { it } from "vitest";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { HttpException, UnauthorizedException } from "@nestjs/common";
import { User } from "../users/schemas/user.schemas";
import { UsersService } from "../users/users.service";
import { Authority } from "../../../composables/constant/response";
import { AuthService } from "./auth.service";
import type { LoginDto } from "./dtos/login.dto";
import { LoginRegistration } from "#/composables/constant/request";

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

  let userModel: Model<User>;
  let userService: UsersService;
  let jwtService: JwtService;
  let service: AuthService;
  let cacheConfig: Cache;

  beforeEach(async () => {
    vi.useFakeTimers();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        UsersService,
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
        {
          provide: getModelToken(User.name),
          useValue: {
            findOne: vi.fn(),
            create: vi.fn()
          }
        }
      ]
    }).compile();

    service = module.get<AuthService>(AuthService);
    cacheConfig = module.get<Cache>(CACHE_MANAGER);
    userModel = module.get<Model<User>>(getModelToken(User.name));
    userService = module.get<UsersService>(UsersService);
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
    beforeEach(() => {
      vi.spyOn(userModel, "findOne").mockReturnValue({
        exec: vi.fn().mockResolvedValueOnce(TEST_USER)
      } as any);
    });

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
      const create = vi.spyOn(userService, "create").mockResolvedValueOnce(email as any);
      expect(create).toHaveBeenCalledTimes(0);

      const result = await service.register(TEST_USER);
      expect(result[Authority.TOKEN]).toEqual(token);
    });

    it("should create a user and then try to login", async () => {
      vi.spyOn(userModel, "findOne").mockReturnValue({
        exec: vi.fn().mockResolvedValue(null)
      } as any);
      const create = vi.spyOn(userService, "create").mockResolvedValueOnce(TEST_EMAIL as any);

      const result = await service.register({
        email,
        code: TEST_CODE,
        loginType: LoginRegistration.REGISTRATION
      });
      expect(create).toHaveBeenCalledTimes(1);
      expect(create.mock.calls[0][0]).toEqual({
        email,
        roles: UsersService.DEFAULT_USER_ROLES
      });
      expect(result[Authority.TOKEN]).toEqual(token);
    });
  });

  describe("login", () => {
    beforeEach(() => {
      vi.spyOn(userModel, "findOne").mockReturnValue({
        exec: vi.fn().mockResolvedValueOnce(TEST_USER)
      } as any);
    });

    it("should throw an exception if the provided code is incorrect", async () => {
      await expect(
        service.login({ email: TEST_EMAIL, code: 999999, loginType: LoginRegistration.LOGIN })
      ).rejects.toThrow(UnauthorizedException);
    });

    it("should throw an exception if the email is not registered", async () => {
      vi
        .spyOn(userService, "findOneByEmail")
        .mockResolvedValueOnce(undefined);

      await expect(service.login(TEST_USER)).rejects.toThrow(HttpException);
    });

    it("should return a JWT token if the login info is correct", async () => {
      const result = await service.login(TEST_USER);

      expect(result[Authority.TOKEN]).toEqual(token);
    });
  });
});
