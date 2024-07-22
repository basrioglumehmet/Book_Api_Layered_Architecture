export type DataResult = {
    data:Array<unknown> | unknown,
    success:boolean,
    messagE:string
}
export type GenericDataResult<T> = {
    data: T;
    success: boolean;
    message: string;
  }
  