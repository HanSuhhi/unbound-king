export interface Edition extends ITable {
  id: number
  name: string
  edition: number
  nickname?: string
}

export default "id, name, edition, nickname";
