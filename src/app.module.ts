import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule, DepartmentModule } from './modules/'


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/test'), EmployeeModule, DepartmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
