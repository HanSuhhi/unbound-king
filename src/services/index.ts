import Dexie from "dexie";
import { dbData } from "./databases/index";

const db: Dexie = new Dexie(import.meta.env.PROJECT_NAME);
db.version(1).stores(dbData);

export function useDb() {
  return db;
}
