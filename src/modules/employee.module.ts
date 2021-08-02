import { Module } from '@nestjs/common';
import { EmployeeService } from '../employee/employee.service';
import { EmployeeController } from '../employee/employee.controller'
import { Employee, EmployeeSchema } from '../employee/employee.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentModule } from './department.module'



@Module({
  imports: [MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }]), DepartmentModule],
  controllers: [EmployeeController],
  providers: [ EmployeeService ],
  exports: [EmployeeService]
})
export class EmployeeModule {}
