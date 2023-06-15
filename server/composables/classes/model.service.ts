import type { Model } from "mongoose";

abstract class A<T> {
  public create?: (createDto: T) => Promise<T>;
}

export class ModelService<T = any> extends A<T> {
  constructor(private readonly model: Model<T>) {
    super();
  }

  public create = async (createDto: T): Promise<T> => {
    const createdPackage = await this.model.create(createDto);
    return createdPackage;
  };
}
