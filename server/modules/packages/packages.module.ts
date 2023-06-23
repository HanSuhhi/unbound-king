import { Module } from "@nestjs/common";
import { PackagesService } from "./packages.service";
import { PackagesController } from "./packages.controller";

@Module({
  // imports: [MongooseModule.forFeature([{ name: Package.name, schema: PackageSchema }])],
  controllers: [PackagesController],
  providers: [PackagesService]
})
export class PackagesModule {}
