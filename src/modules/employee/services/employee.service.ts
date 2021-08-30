import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateEmployeeDto } from '../dto/create-employee.dto'
import { InjectModel } from '@nestjs/mongoose';
import { Employee, EmployeeDocument } from '../schemas/employee.schema';
import { DepartmentService } from '../../department/services/department.service'




@Injectable()
export class EmployeeService {
  constructor(
   @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
    private departmentService: DepartmentService
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const createdEmployee = new this.employeeModel(createEmployeeDto);
    createdEmployee.department = await this.departmentService.findOne({name: createEmployeeDto.departmentName})
    return createdEmployee.save();
  }

  async findAll(): Promise<Employee[]> {
     return this.employeeModel.find().populate('department').exec();
  }
}
