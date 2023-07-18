import type { EditionVo } from "./vos/edition.vo";

export type Edition<T = string> = [name: T, number: number, nickname?: string];
export type EditionType = keyof EditionVo;
