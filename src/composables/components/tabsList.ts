import { map } from "lodash-es";
import { getKeyFromPath } from "../ci/keyFromPath";

type ReturnRecord = Record<string, TabListItem>;

export const defineTabsList = (data: Record<string, any>, translator: ReturnRecord): ReturnRecord => {
  const returnRecord: ReturnRecord = {
    standard: {
      title: "标准包",
      icon: "i-ic-sharp-width-normal",
    },
  };

  const keys = map(data, getKeyFromPath);
  const index = keys.indexOf("standard");
  if (index !== -1) keys.splice(index, 1);

  keys.forEach((key) => {
    if (translator[key]) return (returnRecord[key] = translator[key]);
    returnRecord[key] = {
      title: key,
      icon: "",
    };
  });

  return returnRecord;
};
