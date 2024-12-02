console.log("hello eneryone");
let fname:String;
    fname="vasanth";
let lname:string='Rajendran';
console.log(`First Name ${fname} Last Name : ${lname}`);


//2.number
let num1:number =100, num2:number=200,num3:number=400;
console.log(num1,num2,num3);
//3.boolean
let cond1:boolean =true,cond2:boolean=false;
console.log(cond1,cond2);

//4. array
let courses:string[]=["html","css","js","react"];
let courses1:Array<String>=["html","css","js","react"];
let pincode:number[]=[43254,421441,414121];
let pincode1:Array<Number>=[43254,421441,414121];

//5.tupple : it allows us to store multiple type of data into array
let product:[number,string,boolean]=[101,"vasanth",false];

//6.enum : it create variable with constant values
enum days{sun,mon,tue,wed,thu,fri,sat};
let data1 = days.sun;

//7.union : it allows us to store multiple values in single variable
let info:number | string | boolean =true;

//8. any : when we do't no what type of data is going to store in the variable in that case we use it.
let mix :any="hello";
