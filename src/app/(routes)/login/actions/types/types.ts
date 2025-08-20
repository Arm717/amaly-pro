interface IAcessToken {
    token:string;
    name:string;
}

 interface IData {
    id:number;
    name:string;
    email:string
    adress: string | null;
    phone: string;
}


export interface IAllData {
    success:boolean,
    access_token : IAcessToken,
    data: IData
}

export interface ILoginActionData {
    success: boolean;
    message: string;
    data?:IAllData;
}