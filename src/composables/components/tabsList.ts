import { getGlobalEnumNameOrNot, GlobalEnum } from "../../enums/global.enum";
type ReturnRecord = Record<string, TabListItem>;

export const defineTabsOptions = (data: Record<string, any>, translator: ReturnRecord = {}) => {
  const returnRecord: ReturnRecord = {
    standard: {
      icon: "package",
      index: 0,
      key: "standard",
      injectData: data["standard"].default,
      name: getGlobalEnumNameOrNot("standard"),
    },
  };

  const keys = Object.keys(data);

  const index = keys.indexOf("standard");
  if (index !== -1) keys.splice(index, 1);

  keys.forEach((key, index) => {
    if (translator[key]) returnRecord[key] = translator[key];
    else {
      returnRecord[key] = {
        name: getGlobalEnumNameOrNot(key),
        key,
        index: -1,
      };
    }
    returnRecord[key]["index"] = index + 1;
    returnRecord[key]["injectData"] = data[key].default;
  });

  return returnRecord;
};
