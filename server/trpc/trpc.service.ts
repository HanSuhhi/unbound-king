import { Injectable } from "@nestjs/common";
import { initTRPC } from "@trpc/server";

@Injectable()
export class TrpcService {
  constructor() {

  }

  public trpc = initTRPC.create();
  public procedure = this.trpc.procedure;
  public router = this.trpc.router;
  public mergeRouters = this.trpc.mergeRouters;
}
