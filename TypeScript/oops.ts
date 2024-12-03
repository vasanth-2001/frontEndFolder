 class Person{
    // data member
    pid:number=101;
    pname:string="vasanth";
    paddress:string="namakkal";

    //creating constructor
    constructor(id:number,name:string,addr:string){
        this.pid=id;
        this.pname=name;
        this.paddress=addr;
    }
    // member-function
    personDetails(){
        console.log(`${this.pid} ${this.pname} ${this.paddress}`);
        
    }
}

// create object of class

// let personObj=new Person(102,"nirmal","canada");
// console.log( personObj.pname);
// personObj.personDetails();

// let personObj1=new Person(102,"nithish","UK");
// console.log( personObj1.pname);
// personObj1.personDetails();
export default Person;


