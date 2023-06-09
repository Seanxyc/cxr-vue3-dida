import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TasksModule } from './tasks/tasks.module'
import { ProjectsModule } from './projects/projects.module'

@Module({
  imports: [
    ProjectsModule,
    TasksModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/dida'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}