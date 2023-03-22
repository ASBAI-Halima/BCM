enum gender{
    male, female
}
enum type{
    savings, checking
}
export interface CustmerForm{
    firstName:string;
    lastName:string;
    email:string;
    phone:number;
    gender:gender;
    type:type;
    address:string;
    amount:number;
    accountNumber:number;
}