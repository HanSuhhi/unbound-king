import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import type { UserDocument } from "../users/schemas/user.schemas";
import { CaslAbilityFactory } from "./casl-ability.factory";

describe("CaslAbilityFactory", () => {
  let caslAbilityFactory: CaslAbilityFactory;
  const mockUser = {
    _id: "userId",
    name: "John Doe",
    email: "johndoe@mail.com",
    roles: ["editor"]
  } as unknown as UserDocument;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaslAbilityFactory],
      imports: []
    }).compile();

    caslAbilityFactory = module.get<CaslAbilityFactory>(CaslAbilityFactory);
  });
  it("should be defined", () => {
    expect(new CaslAbilityFactory()).toBeDefined();
  });
});
