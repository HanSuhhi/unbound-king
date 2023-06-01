import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Package } from "./schemas/package.schema";

@Injectable()
export class PackagesService {
  constructor(@InjectModel(Package.name) private readonly packagesModel: Model<Package>) {}

  public addone(packages: Package): Promise<Package> {
    return this.packagesModel.create(packages);
  }
}
