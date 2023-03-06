import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationsModule } from './applications/applications.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, ApplicationsModule, TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db',
    synchronize: false,
    logging: false,
    autoLoadEntities: true
    //entities: [__dirname + '/dist/**/*.entity{.ts,.js}'],
  })],
  
})
export class AppModule {}
