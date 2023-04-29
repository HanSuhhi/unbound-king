import type { ITable } from "jsstore";
import { DATA_TYPE } from "jsstore";

const idbUser: ITable = {
  name: "Users",
  columns: {
    name: {
      dataType: DATA_TYPE.String
    },
    avator: {
      dataType: DATA_TYPE.String
    },
    email: {
      dataType: DATA_TYPE.String
    }
  }
};

export default idbUser;
