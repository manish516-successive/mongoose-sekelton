import { Controller, Get, Param, ParseIntPipe, Post, UsePipes, Body} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { Department } from './department.schema';
import { CreateDepartmentDto } from './create-department.dto'

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  async getDepartments(): Promise<Department[]> {
    return await this.departmentService.findAll();
  }

  @Post()
  create(@Body() createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    return this.departmentService.create(createDepartmentDto);
  }

  @Get()
  findAll(): Promise<Department[]> {
    return this.departmentService.findAll();
  }
}
