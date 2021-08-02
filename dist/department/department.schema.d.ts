import { Document, Schema as MongooseSchema } from 'mongoose';
import { Employee } from '../employee/employee.schema';
export declare type DepartmentDocument = Department & Document;
export declare class Department {
    name: string;
    employees: Employee[];
}
export declare const DepartmentSchema: MongooseSchema<Document<Department, any, any>, import("mongoose").Model<any, any, any>, undefined, any>;
