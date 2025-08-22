interface IAcessToken {
  token: string;
  name: string;
}

interface IData {
  id: number;
  name: string;
  email: string;
  address: string | null; 
  phone: string | null;
}

export interface ILoginActionDataSuccess {
  success: true;
  message: string;
  access_token: IAcessToken;
  data: IData;
}

export interface ILoginActionDataReject {
  success: false;
  message: string;
}

export type ILoginActionData = ILoginActionDataSuccess | ILoginActionDataReject;
