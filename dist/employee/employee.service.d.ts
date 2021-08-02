import { Model } from 'mongoose';
import { CreateEmployeeDto } from './create-employee.dto';
import { Employee, EmployeeDocument } from './employee.schema';
import { DepartmentService } from '../department/department.service';
export declare class EmployeeService {
    private employeeModel;
    private departmentService;
    constructor(employeeModel: Model<EmployeeDocument>, departmentService: DepartmentService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<Employee>;
    findAll(): Promise<Employee[]>;
}
