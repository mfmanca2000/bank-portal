import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Application } from './application.entity';
import { ApplicationsService } from './applications.service';

@Crud({
    model: {
        type: Application
    }
})
@Controller('apps')
export class ApplicationsController implements CrudController<Application>{
  constructor(public service: ApplicationsService){}

  
}
