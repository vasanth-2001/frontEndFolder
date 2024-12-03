"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interfaceImple = /** @class */ (function () {
    function interfaceImple(id, name, contact) {
        this.empId = id;
        this.empName = name;
        this.empContact = contact;
    }
    interfaceImple.prototype.employeeDetails = function () {
        return "Id:".concat(this.empId, " Name:").concat(this.empName, " Contact:").concat(this.empContact);
    };
    return interfaceImple;
}());
var organizationObj = new interfaceImple(501, "vasanth", 9999);
console.log(organizationObj.employeeDetails());
