export interface ManagerInfo {
    id:string,
    name:string,
    password:string,
    role:string

}

export interface HostInfo{
    id:string,
    name:string,
    employeeNum:string,
    department:string,
    location:string,
    contactNumber:string
}

export interface VisitorInfo{
    id:string,
    name:string,
    location:string,
    ParentComp:string,
    Purpose:string,
    MobileNumber:string,
    VisitingDate:string,
    Hostname:string
}
