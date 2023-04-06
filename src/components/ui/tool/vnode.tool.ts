import type { VNode, VNodeNormalizedChildren } from "vue";

/**
 * @description get index of vnode
 */
export function getVnodeIndex(index: number, arr: Array<VNodeNormalizedChildren[]>) {
  let _index = 0;
  for (let i = 0; i < index; i++) {
    const nodes = arr[i];
    _index += nodes.length;
  }
  return _index;
}

/**
 * @description components slot filter
 */
export const slotFilter = (slot: any): VNodeNormalizedChildren[][] => {
  const eles = slot
    // filter comment vnode
    .filter((el: VNode) => el.type.toString() !== "Symbol(Comment)")
    .map((el: VNode) => {
      return el.type.toString() === "Symbol(Fragment)" || el.type.toString() === "Symbol()" ? (el.children as any)!.map((el: any) => el) : [el];
    }) as VNodeNormalizedChildren[][];
  return eles;
};
