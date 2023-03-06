import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Application } from './application.entity';

@Injectable()
export class ApplicationsService extends TypeOrmCrudService<Application> {
  constructor(@InjectRepository(Application) repo: Repository<Application>) {
    super(repo);
  }

  
}
