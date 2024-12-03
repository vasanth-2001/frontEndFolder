"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var oops_1 = require("./oops");
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company(id, name, addr, compname, econtact, epost) {
        var _this = _super.call(this, id, name, addr) || this;
        _this.cName = compname;
        _this.eContact = econtact;
        _this.empPost = epost;
        return _this;
    }
    Company.prototype.personDetails = function () {
        console.log("EmpID:".concat(this.pid, " EmpName:").concat(this.pname, " Post:").concat(this.empPost, " company:").concat(this.cName, "Address:").concat(this.paddress, " econtact:").concat(this.eContact));
    };
    return Company;
}(oops_1.default));
var comp = new Company(101, "vasanth", "chennai", "changepond", 9843789505, "Developer");
comp.personDetails();
