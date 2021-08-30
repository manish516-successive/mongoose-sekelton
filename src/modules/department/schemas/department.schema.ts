import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { Employee } from '../../employee/schemas/employee.schema'

export type DepartmentDocument = Department & Document;

@Schema()
export class Department {
  @Prop()
  name: string;

  @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'Employee' })
  employees:  Employee[]
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);