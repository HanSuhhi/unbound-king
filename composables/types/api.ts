export interface ResponseOriginData<T = any> {
  statusCode: number
  data: T
  alert?: string
}
