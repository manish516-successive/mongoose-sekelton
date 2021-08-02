import { Model } from 'mongoose';
import { CreateDepartmentDto } from './create-department.dto';
import { Department, DepartmentDocument } from './department.schema';
export declare class DepartmentService {
    private departmentModel;
    constructor(departmentModel: Model<DepartmentDocument>);
    create(createDepartmentDto: CreateDepartmentDto): Promise<Department>;
    findAll(): Promise<Department[]>;
    findOne(query: any): Promise<Department>;
}
