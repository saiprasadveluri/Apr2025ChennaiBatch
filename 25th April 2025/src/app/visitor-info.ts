export interface VisitorInfo {
    id?:string,
    name?:string,
    parentCompany?:string,
    location?:string,
    purpose?:string,
    mobileNo?:string,
    visitingDate?:string,
    hostName?:string
}

export interface HostInfo {
    id?:string,
    hostName?:string,
    employeeNumber?:string,
    department?:string,
    location?:string,
    mobileNo?:string,
    userId?:string,
    password?:string,
    role?:string
}

export interface ManagerInfo{
    userName?:string,
    userId?:string,
    password?:string,
    role?:string
}
