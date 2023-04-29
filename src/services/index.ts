import { initJsStore } from "./idbService";

export async function useIndexDb() {
  try {
    const isDbCreated = await initJsStore();
    if (isDbCreated)
      console.log("db created");
      // prefill database
    else
      console.log("db opened");
  }
  catch (ex) {
    console.error("ex: ", ex);
  }
}
