import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { Department } from '../department/department.schema'


export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop()
  name: string;

  @Prop()
  designation: string;

  @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'Department' })
  department:  Department
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);