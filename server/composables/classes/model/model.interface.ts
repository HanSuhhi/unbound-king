export interface IModelService<T = any> {
  create?(createDto: T): Promise<T>
  methodB?(): void
}
