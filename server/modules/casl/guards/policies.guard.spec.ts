import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { Reflector } from "@nestjs/core";
import type { ExecutionContext } from "@nestjs/common";
import { CaslAbilityFactory } from "../casl-ability.factory";
import { Role } from "../../roles/enum/role.enum";
import { PoliciesGuard } from "./policies.guard";

describe("PoliciesGuard", () => {
  let policiesGuard: PoliciesGuard;
  let reflector: Reflector;
  let caslAbilityFactory: CaslAbilityFactory;
  const context = {
    getHandler: vi.fn(),
    getClass: vi.fn(),
    switchToHttp: vi.fn().mockReturnThis(),
    getRequest: vi.fn().mockReturnValue({
      user: {
        _id: "userId",
        name: "John Doe",
        email: "johndoe@mail.com",
        roles: [Role.Player]
      }
    })
  } as unknown as ExecutionContext;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PoliciesGuard,
        { provide: Reflector, useValue: { get: vi.fn() } },
        { provide: CaslAbilityFactory, useValue: { createForUser: vi.fn() } }
      ]
    }).compile();

    policiesGuard = module.get<PoliciesGuard>(PoliciesGuard);
    reflector = module.get<Reflector>(Reflector);
    caslAbilityFactory = module.get<CaslAbilityFactory>(CaslAbilityFactory);
  });

  it("should return true if no policy handlers are set", async () => {
    vi.spyOn(reflector, "get").mockReturnValueOnce(undefined);
    expect(await policiesGuard.canActivate(context)).toEqual(true);
  });

  it("should execute all policy handlers", async () => {
    const handler1 = vi.fn().mockReturnValueOnce(true);
    const handler2 = { handle: vi.fn().mockReturnValueOnce(true) };

    vi.spyOn(reflector, "get").mockReturnValueOnce([handler1, handler2]);

    await policiesGuard.canActivate(context);

    expect(handler1).toHaveBeenCalled();
    expect(handler2.handle).toHaveBeenCalled();
  });

  it("should return false if any policy handler returns false", async () => {
    const handler1 = vi.fn().mockReturnValueOnce(false);
    const handler2 = { handle: vi.fn().mockReturnValueOnce(true) };

    vi.spyOn(reflector, "get").mockReturnValueOnce([handler1, handler2]);

    expect(await policiesGuard.canActivate(context)).toEqual(false);
  });

  it("should execute policy handlers with the ability", async () => {
    const ability = { can: vi.fn() };
    const handler1 = vi.fn().mockReturnValueOnce(true);
    const handler2 = { handle: vi.fn().mockReturnValueOnce(true) };

    vi.spyOn(reflector, "get").mockReturnValueOnce([handler1, handler2]);
    vi.spyOn(caslAbilityFactory, "createForUser").mockReturnValueOnce(ability as any);

    await policiesGuard.canActivate(context);

    expect(handler1).toHaveBeenCalledWith(ability);
    expect(handler2.handle).toHaveBeenCalledWith(ability);
  });
});
