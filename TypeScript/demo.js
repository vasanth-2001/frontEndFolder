console.log("hello eneryone");
var fname;
fname = "vasanth";
var lname = 'Rajendran';
console.log("First Name ".concat(fname, " Last Name : ").concat(lname));
//2.number
var num1 = 100, num2 = 200, num3 = 400;
console.log(num1, num2, num3);
//3.boolean
var cond1 = true, cond2 = false;
console.log(cond1, cond2);
//4. array
var courses = ["html", "css", "js", "react"];
var courses1 = ["html", "css", "js", "react"];
var pincode = [43254, 421441, 414121];
var pincode1 = [43254, 421441, 414121];
//5.tupple : it allows us to store multiple type of data into array
var product = [101, "vasanth", false];
//6.enum : it create variable with constant values
var days;
(function (days) {
    days[days["sun"] = 0] = "sun";
    days[days["mon"] = 1] = "mon";
    days[days["tue"] = 2] = "tue";
    days[days["wed"] = 3] = "wed";
    days[days["thu"] = 4] = "thu";
    days[days["fri"] = 5] = "fri";
    days[days["sat"] = 6] = "sat";
})(days || (days = {}));
;
var data1 = days.sun;
//7.union : it allows us to store multiple values in single variable
var info = true;
//8. any : when we do't no what type of data is going to store in the variable in that case we use it.
var mix = "hello";
