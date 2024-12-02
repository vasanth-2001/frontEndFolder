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
var personObj = new Person(102, "nirmal", "canada");
console.log(personObj.pname);
personObj.personDetails();
var personObj1 = new Person(102, "nithish", "UK");
console.log(personObj1.pname);
personObj1.personDetails();
