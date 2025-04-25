export interface Visitorinfo {
    id?:string,
    vname?:string,
    location?:string,
    parentcomp?:string,
    purpose?:string,
    mobileno?:string,
    visitdate?:string,
    hostname?:string
}

export interface Hostinfo{
    id?:string,
    hostname?:string,
    empNum?:string,
    dept?:string,
    location?:string,
    email?:string,
    password?:string,
    mobileno?:string,
    role?:string
}

export interface Managerinfo{
    uName?:string,
    uId?:string,
    password?:string,
    role?:string
}

//done