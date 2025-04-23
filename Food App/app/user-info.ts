export interface UserInfo {
    ID?:string,
    name?:string,
    email?:string,
    password?:string
}
export interface UserInfoNew {
    id?:string,
    name?:string,
    role?: string,
    location?:string,
    email?:string,
    password?:string
}