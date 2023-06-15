import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ModelService } from "../../composables/classes/model.service";
import { Package } from "./schemas/packages.schema";

@Injectable()
export class PackagesService extends ModelService<Package> {
  constructor(
    @InjectModel(Package.name) private readonly PackageModel: Model<Package>
  ) {
    super(PackageModel);
  }
}
