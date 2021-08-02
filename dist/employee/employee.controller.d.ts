import { EmployeeService } from './employee.service';
import { Employee } from './employee.schema';
import { CreateEmployeeDto } from './create-employee.dto';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    getEmployees(): Promise<Employee[]>;
    create(createEmployeeDto: CreateEmployeeDto): Promise<Employee>;
    findAll(): Promise<Employee[]>;
}
