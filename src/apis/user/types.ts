type loginResData = {
  userName?: string
  userId: number
}

type LoginParam = {
  email: string
  password: string
}

type UserInfoResData = {
  userName: string
  age: number
  email: string
  address: string
}

type UserInfoParam = {
  userId: number
}

type SaveUserParam = {
  userName: string
  password: string
}

type SaveUserResData = {
  userId: 1
}

type GetProductListParam = {
  storeId: number
}

type GetProductListResData = Array<{
  productName: string
  productId: number
  productType: string
}>
