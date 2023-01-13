import { tables } from "./databases";
import { connection } from "./ibdCon";

export const initJsStore = async () => {
  return await connection.initDb({
    name: "land",
    tables,
  });
};
