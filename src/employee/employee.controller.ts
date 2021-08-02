import { Controller, Get, Param, ParseIntPipe, Post, UsePipes, Body} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.schema';
import { CreateEmployeeDto } from './create-employee.dto'

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async getEmployees(): Promise<Employee[]> {
    return await this.employeeService.findAll();
  }

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }
}
