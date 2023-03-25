import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { join } from 'path';
import { ArticleModule } from './article/article.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    FilesModule,
    ArticleModule,
    ProjectModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/almetoff'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
  ],
})
export class AppModule {}
