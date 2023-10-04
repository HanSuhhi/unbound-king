type Role = import("#/server/modules/roles/enum/role.enum").Role

interface User extends ITable {
  id: number
  email: string
  token?: string
  roles?: Role[]
  nickname?: string
  main: ServiceBoolean
}
