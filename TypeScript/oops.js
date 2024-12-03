"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    //creating constructor
    function Person(id, name, addr) {
        // data member
        this.pid = 101;
        this.pname = "vasanth";
        this.paddress = "namakkal";
        this.pid = id;
        this.pname = name;
        this.paddress = addr;
    }
    // member-function
    Person.prototype.personDetails = function () {
        console.log("".concat(this.pid, " ").concat(this.pname, " ").concat(this.paddress));
    };
    return Person;
}());
// create object of class
// let personObj=new Person(102,"nirmal","canada");
// console.log( personObj.pname);
// personObj.personDetails();
// let personObj1=new Person(102,"nithish","UK");
// console.log( personObj1.pname);
// personObj1.personDetails();
exports.default = Person;
