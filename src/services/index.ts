import { initJsStore } from "./idbService";

export const useIndexDb = async () => {
  try {
    const isDbCreated = await initJsStore();
    if (isDbCreated) {
      console.log("db created");
      // prefill database
    } else {
      console.log("db opened");
    }
  } catch (ex) {
    console.log("ex: ", ex);
    // @TODO
    // console.error(ex.message);
    // Global.isIndexedDbSupported = false;
  }
};
