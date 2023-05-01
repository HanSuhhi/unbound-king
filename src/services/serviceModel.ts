import type { Table } from "dexie";
import { useDb } from "./index";

export function useServiceModel<T>(table: string) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const model = (useDb() as any)[table] as Table<T>;

  const add = async (data: T): Promise<T> => {
    console.warn("系统开始生成用户...");
    await model.add(data);
    console.warn("生成用户完成...");
    return data;
  };

  const count = async () => {
    return await model.count();
  };

  const isEmpty = async (): Promise<boolean> => {
    return await count() === 0;
  };

  return { isEmpty, add, count, model };
}

export enum Boolean {
  False,
  True
}
