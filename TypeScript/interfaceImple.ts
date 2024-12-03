import IEmployee from "./interface";
class interfaceImple implements IEmployee{
    empId:number;
    empName:string;
    empContact: number;
    constructor(id:number,name:string,contact:number){
        this.empId=id;
        this.empName=name;
        this.empContact=contact;
    }
    employeeDetails(): string {
        return `Id:${this.empId} Name:${this.empName} Contact:${this.empContact}`
    }
}
let organizationObj = new interfaceImple(501,"vasanth",9999);
console.log(organizationObj.employeeDetails());
