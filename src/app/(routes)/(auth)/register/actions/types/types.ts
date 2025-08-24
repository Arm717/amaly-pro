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

export interface IRegisterActionDataSuccess {
  success: true;
  message: string;
  access_token: IAcessToken;
  data: IData;
}

export interface IRegisterActionDataReject {
  success: false;
  message: string;
}

export type IRegisterActionData = IRegisterActionDataSuccess | IRegisterActionDataReject;
