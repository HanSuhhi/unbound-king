import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PackagesService } from "./packages.service";
import { PackagesController } from "./packages.controller";
import { Package, PackageSchema } from "./schemas/package.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Package.name, schema: PackageSchema }])],
  controllers: [PackagesController],
  providers: [PackagesService]
})
export class PackagesModule {}
