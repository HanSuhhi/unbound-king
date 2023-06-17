import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Package } from "./schemas/packages.schema";
import { CommonModelService } from "@/classes/model/common.service";

@Injectable()
export class PackagesService extends CommonModelService<Package> {
  constructor(
    @InjectModel(Package.name) private readonly PackageModel: Model<Package>
  ) {
    super(PackageModel);
  }
}
