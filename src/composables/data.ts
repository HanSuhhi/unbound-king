const dataset = new Map<string, any>();

const getKeyFromId = (id: string): string => id.match(/[a-zA-Z]+/)?.[0] || "";

export const registDataset = (data: object) => {
  const id = Object.keys(data)[0];
  dataset.set(getKeyFromId(id), data);
};

export const getDataFromDataset = <T>(id: string) => <T>dataset.get(getKeyFromId(id))[id];
