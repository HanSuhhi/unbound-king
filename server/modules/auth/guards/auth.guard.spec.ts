import { ConfigService } from "@nestjs/config";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Test } from "@nestjs/testing";
import type { TestingModule } from "@nestjs/testing";
import { UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "./auth.guard";

describe("AuthGuard", () => {
  let guard: AuthGuard;
  let configService: ConfigService;
  let jwtService: JwtService;
  let reflector: Reflector;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthGuard,
        {
          provide: ConfigService,
          useValue: {
            get: vi.fn().mockReturnValue("test-secret")
          }
        },
        {
          provide: JwtService,
          useValue: {
            verifyAsync: vi.fn().mockResolvedValue({ sub: "user-id" })
          }
        },
        {
          provide: Reflector,
          useValue: {
            getAllAndOverride: vi.fn()
          }
        }
      ]
    }).compile();
    guard = module.get<AuthGuard>(AuthGuard);
    configService = module.get(ConfigService);
    jwtService = module.get(JwtService);
    reflector = module.get(Reflector);
  });

  it("should be defined", () => {
    expect(guard).toBeDefined();
  });

  it("should allow access to public routes", async () => {
    // Arrange
    const context = {
      getHandler: () => {},
      getClass: () => {},
      switchToHttp: () => ({
        getRequest: () => ({})
      })
    } as any;

    const getAllAndOverrideSpy = vi.spyOn(reflector, "getAllAndOverride");

    getAllAndOverrideSpy.mockReturnValue(true);

    // Act
    const result = await guard.canActivate(context);

    // Assert
    expect(result).toBeTruthy();
    expect(getAllAndOverrideSpy).toHaveBeenCalledWith("isPublic", [context.getHandler(), context.getClass()]);
  });

  it("should extract token from header and allow access if token is valid", async () => {
    // Arrange
    const context = {
      getHandler: () => {},
      getClass: () => {},
      switchToHttp: () => ({
        getRequest: () => ({
          headers: {
            authorization: "Bearer valid-token"
          }
        })
      })
    } as any;

    const verifyAsyncSpy = vi.spyOn(jwtService, "verifyAsync");

    // Act
    const result = await guard.canActivate(context);

    // Assert
    expect(result).toBeTruthy();
    expect(verifyAsyncSpy).toHaveBeenCalledWith("valid-token", { secret: "test-secret" });
  });

  it("should throw an UnauthorizedException if token is not present", async () => {
    // Arrange
    const context = {
      getHandler: () => {},
      getClass: () => {},
      switchToHttp: () => ({
        getRequest: () => ({
          headers: {}
        })
      })
    } as any;

    // Act and assert
    await expect(guard.canActivate(context)).rejects.toThrow(UnauthorizedException);
  });

  it("should throw an UnauthorizedException if token is invalid", async () => {
    // Arrange
    const context = {
      getHandler: () => {},
      getClass: () => {},
      switchToHttp: () => ({
        getRequest: () => ({
          headers: {
            authorization: "Bearer invalid-token"
          }
        })
      })
    } as any;

    const verifyAsyncSpy = vi.spyOn(jwtService, "verifyAsync");
    verifyAsyncSpy.mockRejectedValueOnce({});

    // Act and assert
    await expect(guard.canActivate(context)).rejects.toThrow(UnauthorizedException);
    expect(verifyAsyncSpy).toHaveBeenCalledWith("invalid-token", { secret: "test-secret" });
  });
});
