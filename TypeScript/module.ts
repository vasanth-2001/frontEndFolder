// import { Person } from "./oops";
import Person from "./oops";
class Company extends Person{
    cName:string;
    eContact:number;
    empPost:string;

    constructor(id : number,name:string,addr:string,compname:string,econtact:number,epost:string){
        super(id,name,addr);
        this.cName=compname;
        this.eContact=econtact;
        this.empPost=epost;
    }

    personDetails(){
        console.log(`EmpID:${this.pid} EmpName:${this.pname} Post:${this.empPost} company:${this.cName}Address:${this.paddress} econtact:${this.eContact}`);
        
    }
}

let comp=new Company(101,"vasanth","chennai","changepond",9843789505,"Developer");
comp.personDetails();

