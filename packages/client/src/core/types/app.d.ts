declare global {
  type User = {
    id: number
    firstName: string
    secondName: string
    displayName: string
    login: string
    email: string
    phone: string
    avatar: string | null
  }
  type UserServer = {
    id: number
    first_name: string
    second_name: string
    display_name: string
    login: string
    email: string
    phone: string
    avatar: string | null
  }
}
export {}
