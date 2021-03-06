import { Nullable } from "../../libs/customTypes";
export declare type IData = any | any[] | null;
export declare type ICode = number;
export declare type IMessage = string;
export declare type ITimestamp = Date;
export interface IError {
    location: string;
    msg: string;
    param: string;
    value: string;
}
export interface IResponse {
    data: IData;
    code: ICode;
    errors: Nullable<IError[]>;
    message: IMessage;
    timestamp: ITimestamp;
}
