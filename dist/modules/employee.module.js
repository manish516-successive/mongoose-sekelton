"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModule = void 0;
const common_1 = require("@nestjs/common");
const employee_service_1 = require("../employee/employee.service");
const employee_controller_1 = require("../employee/employee.controller");
const employee_schema_1 = require("../employee/employee.schema");
const mongoose_1 = require("@nestjs/mongoose");
const department_module_1 = require("./department.module");
let EmployeeModule = class EmployeeModule {
};
EmployeeModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: employee_schema_1.Employee.name, schema: employee_schema_1.EmployeeSchema }]), department_module_1.DepartmentModule],
        controllers: [employee_controller_1.EmployeeController],
        providers: [employee_service_1.EmployeeService],
        exports: [employee_service_1.EmployeeService]
    })
], EmployeeModule);
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employee.module.js.map