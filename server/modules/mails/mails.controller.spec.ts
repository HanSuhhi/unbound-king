import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { MailsController } from "./mails.controller";

describe("MailsController", () => {
  let controller: MailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailsController]
    }).compile();

    controller = module.get<MailsController>(MailsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
