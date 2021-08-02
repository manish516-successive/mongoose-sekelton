import { Document, Schema as MongooseSchema } from 'mongoose';
import { Department } from '../department/department.schema';
export declare type EmployeeDocument = Employee & Document;
export declare class Employee {
    name: string;
    designation: string;
    department: Department;
}
export declare const EmployeeSchema: MongooseSchema<Document<Employee, any, any>, import("mongoose").Model<any, any, any>, undefined, any>;
