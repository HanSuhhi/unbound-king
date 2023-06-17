import type { Model } from "mongoose";

import type { IModelService } from "./model.interface";

export class CommonModelService<T = any > implements IModelService<T> {
  constructor(
    private readonly model: Model<T>
  ) { }

  public create = async (createDto: T): Promise<T> => {
    const createdPackage = await this.model.create(createDto);
    return createdPackage;
  };
}
