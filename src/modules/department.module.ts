import { Module } from '@nestjs/common';
import { DepartmentService } from '../department/department.service';
import { DepartmentController } from '../department/department.controller'
import { Department, DepartmentSchema } from '../department/department.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Department.name, schema: DepartmentSchema }])],
  controllers: [DepartmentController],
  providers: [ DepartmentService ],
  exports: [DepartmentService]

})
export class DepartmentModule {}
