import { Injectable } from "@nestjs/common";
import type { Package } from "./schemas/package.schema";

@Injectable()
export class PackagesService {
  constructor(
    // @InjectModel(Package.name) private readonly packagesModel: Model<Package>
  ) { }

  public addone(packages: Package) {
    // return this.packagesModel.create(packages);
  }
}
