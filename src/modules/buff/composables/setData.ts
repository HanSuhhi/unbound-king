export function setData(map: Map<string, BuffStruct[]>, buff: BuffStruct) {
  if (!map.get(buff.from)) map.set(buff.from, []);
  map.get(buff.from)!.push(buff);
}
