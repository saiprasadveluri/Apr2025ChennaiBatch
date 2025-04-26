export interface UserInfo {
}

export interface visitorInfo {

    id: string,
    visitorName: string,
    visitorCompany: string,
    visitorPurpose: string,
    visitorMobile: string,
    visitorDate: string,
    hostName: string
}

export interface hostInfo {
    id: string,
    hostName: string,
    empNo: string,
    dept: string,
    location: string,
    contactNo: string,
    email: string,
    password: string,
    role: string
}

export interface managerInfo{
    email:string,
    password:string,
    role:string
}

