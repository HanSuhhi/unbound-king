import { DATA_Genders } from "@/enums/character.enum";
import type { ITable } from "jsstore";
import { DATA_TYPE } from "jsstore";

const idbHero: ITable = {
  name: "Heroes",
  columns: {
    id: {
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      notNull: true,
      dataType: DATA_TYPE.String,
    },
    gender: {
      dataType: DATA_TYPE.Number,
      default: DATA_Genders.MALE,
    },
    nature: {
      dataType: DATA_TYPE.Array,
      default: [],
    },
    personality: {
      dataType: DATA_TYPE.Array,
      default: [],
    },
    nation: {
      dataType: DATA_TYPE.Number,
      notNull: true,
    },
    country: {
      dataType: DATA_TYPE.Number,
      notNull: true,
    },
    area: {
      dataType: DATA_TYPE.Number,
      notNull: true,
    },
    role: {
      dataType: DATA_TYPE.Number,
      notNull: true,
    },
    attrubute: {
      dataType: DATA_TYPE.Number,
      notNull: true,
    },
    skill: {
      dataType: DATA_TYPE.Array,
      default: [],
    },
  },
};

export default idbHero;
