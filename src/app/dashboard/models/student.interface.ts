export interface Student {
    active: boolean;
    class: string;
    createdAt: string;
    updatedAt: string;
    email: string;
    first_name: string;
    last_name: string;
    linkToLocker:string;
    locker:any;
    note: string | null;
    paid: number;
    _id: number;
    phone_number:string;
    school:any;
    school_id:number;
}
