import { DepartmentService } from './department.service';
import { Department } from './department.schema';
import { CreateDepartmentDto } from './create-department.dto';
export declare class DepartmentController {
    private readonly departmentService;
    constructor(departmentService: DepartmentService);
    getDepartments(): Promise<Department[]>;
    create(createDepartmentDto: CreateDepartmentDto): Promise<Department>;
    findAll(): Promise<Department[]>;
}
