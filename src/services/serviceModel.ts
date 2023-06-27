import { Dexie, type Table } from "dexie";
import { dbData } from "./databases/index";

const db: Dexie = new Dexie(import.meta.env.PROJECT_NAME);
const dbVersion = 1;
const stores = db.version(dbVersion).stores(dbData);

export function useServiceModel<T>(table: string) {
  const model = (db as any)[table] as Table<T>;

  /**
   * Add a new record async.
   * Returns the added data.
   *
   * @param data The data to add
   * @returns The added data
   */
  const add = async (data: T): Promise<T> => {
    await model.add(data);
    return data;
  };

  /**
  * Return a Promise that resolves with a number representing the count of some data.
  *
  * @function
  * @returns {Promise<number>} A Promise that resolves with a number representing the count of some data.
  */
  const count = async (): Promise<number> => {
    return await model.count();
  };

  /**
   * Checks if a certain condition is empty.
   *
   * @async
   * @function
   * @returns {Promise<boolean>} A Promise that resolves with a boolean value indicating whether the condition is empty or not.
   */
  const isEmpty = async (): Promise<boolean> => {
    return await count() === 0;
  };

  /**
   * An asynchronous method that updates a data record in a model by index.
   *
   * @async
   * @param {number} index - The index of the record to update
   * @param {Partial<T>} data - An object with updated properties of the record
   * @returns {Promise<boolean>} A Promise that resolves with a boolean value indicating whether the update was successful or not
   */
  const update = async (index: number, data: Partial<T>): Promise<Boolean> => {
    return await model.update(index, data);
  };

  return { isEmpty, add, count, update, model, stores };
}

export function defineServiceExportFunction<T>(fn: T) {
  if (import.meta.env.SSR) return () => {};
  return fn;
}

export enum Boolean {
  False,
  True
}
