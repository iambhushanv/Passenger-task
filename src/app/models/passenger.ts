
export interface Ipassenger {
    id: number;
    fullname: string ;
    checkedIn: boolean;
    checkInDate: number  | null;
    children: null | Array<Ichildren>
}

export interface Ichildren {
 name : string
 age : number   
}

export interface Ires<T> {
    msg : string
    data : T
}

