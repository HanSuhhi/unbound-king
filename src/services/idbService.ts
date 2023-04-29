import { tables } from "./databases";
import { connection } from "./ibdCon";

export async function initJsStore() {
  return await connection.initDb({
    name: "land",
    tables
  });
}
