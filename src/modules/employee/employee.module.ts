import { Module } from '@nestjs/common';
import { EmployeeService } from './services/employee.service';
import { EmployeeController } from './employee.controller'
import { Employee, EmployeeSchema } from './schemas/employee.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentModule } from '../department/department.module'



@Module({
  imports: [MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }]), DepartmentModule],
  controllers: [EmployeeController],
  providers: [ EmployeeService ],
  exports: [EmployeeService]
})
export class EmployeeModule {}
