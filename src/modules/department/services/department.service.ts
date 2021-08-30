import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreateDepartmentDto } from '../dto/create-department.dto'
import { InjectModel } from '@nestjs/mongoose';
import { Department, DepartmentDocument } from '../schemas/department.schema';


@Injectable()
export class DepartmentService {
  constructor(
   @InjectModel(Department.name) private departmentModel: Model<DepartmentDocument>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    const createdDepartment = new this.departmentModel(createDepartmentDto);
    return createdDepartment.save();
  }

  async findAll(): Promise<Department[]> {
     return this.departmentModel.find().exec();
  }


  async findOne(query): Promise<Department> {
     return this.departmentModel.findOne(query).exec();
  }
}
