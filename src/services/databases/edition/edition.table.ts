export interface Version extends ITable {
  id: number
  name: string
  version: number
  nickname?: string
}

export default "id, name, version, nickname";
