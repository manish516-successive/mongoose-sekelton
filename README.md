# Mongoose skeleton

- [Database Connectivity using mongoose](#database-connectivity-using-sequelize)
- [Config Change](#config-change)

### Database Connectivity Using Mongoose

[Mongoose](https://mongoosejs.com/docs/documents.html) is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

- Connection: For Connection,Skeleton use .env files. Please refer [Config Change](#config-change) to know how to define Database credentials for mongodb
- Schema: With Mongoose, everything is derived from a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection. Schemas are used to define Models. Models are responsible for creating and reading documents from the underlying MongoDB database. For example, employee collections needs [employee schema](https://github.com/manish516-successive/mongoose-sekelton/blob/main/src/modules/employee/schemas/employee.schema.ts) for interaction with DB 
- Service: Mongoose skeleton interacts with schemas though services i.e [employee service](https://github.com/manish516-successive/mongoose-sekelton/blob/main/src/modules/employee/services/employee.service.ts) interacts with [employee schema](https://github.com/manish516-successive/mongoose-sekelton/blob/main/src/modules/employee/schemas/employee.schema.ts)
- Relationship: Mongoose supports both embedded relationship or reference based relationships. We can implement Reference based relationships using populate.Mongoose skeleton demonstrate one to many relationship for following structure.

```
Table employee as E {
  id int [pk, increment] // auto-increment
  name varchar
  designation varchar
  department_id integer
}

Table department {
  id int [pk]
  name varchar
 }

// Creating references
// You can also define relaionship separately
// > many-to-one; < one-to-many; - one-to-one
Ref: E.department_id > department.id  
```
Sequelize skeleton define following models

- Employee Schema

```
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { Department } from '../../department/schemas/department.schema'


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
```

- Department Schema

```
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
```
Mongoose skeleton uses populate to fetch a department with all the employees

```
async findAll(): Promise<Employee[]> {
     return this.employeeModel.find().populate('department').exec();
  }
  
```
In the following way , skeleton associates employee with its department

```
async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const createdEmployee = new this.employeeModel(createEmployeeDto);
    createdEmployee.department = await this.departmentService.findOne({name: createEmployeeDto.departmentName})
    return createdEmployee.save();
  }

```
### Config change

Mongoose skeleton use .env file for each environment i,e For Dev Env it used dev.env and for Test Env it use test.env file. 

Sample .env file for development file

```
NODE_ENV=dev
DB_HOST=<DB_HOST>
DB_PORT=27017
DB_NAME=<DB_NAME>
```
