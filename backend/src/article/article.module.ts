import { Module } from '@nestjs/common';
import { Article, ArticleSchema } from './schemas/article.schema';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
