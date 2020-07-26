export type loginResData = {
  userName?: string
  userId: number
}

export type LoginParam = {
  email: string
  password: string
}

export type UserInfoResData = {
  userName: string
  age: number
  email: string
  address: string
}

export type UserInfoParam = {
  userId: number
}

export type SaveUserParam = {
  userName: string
  password: string
}

export type SaveUserResData = {
  userId: 1
}

export type GetProductListParam = {
  storeId: number
}

export type GetProductListResData = Array<{
  productName: string
  productId: number
  productType: string
}>
