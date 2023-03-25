import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article, ArticleDocument } from './schemas/article.schema';
import { Model, ObjectId } from 'mongoose';
@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
  ) {}

  async create(dto, picture, audio): Promise<Article> {
    const article = await this.articleModel.create({ ...dto });
    return article;
  }

  async getAll(count = 10, offset = 0, tag = null): Promise<Article[]> {
    let articles = await this.articleModel
      .find()
      .skip(Number(offset))
      .limit(Number(count));
    if (tag != null) {
      articles = articles.filter((e) => {
        return e.tags.includes(tag);
      });
      console.log(articles);
    }
    return articles;
  }

  async getOne(id: ObjectId): Promise<Article> {
    const article = await this.articleModel.findById(id);
    article.watchesCount += 1;
    article.save();
    console.log(article.watchesCount);
    return article;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const article = await this.articleModel.findByIdAndDelete(id);
    return article._id;
  }

  async search(query: string): Promise<Article[]> {
    const articles = await this.articleModel.find({
      name: { regex: new RegExp(query, 'i') },
    });
    return articles;
  }

  async like(id: ObjectId): Promise<Article> {
    const article = await this.articleModel.findById(id);
    article.likesCount += 1;
    article.save();
    console.log(article.watchesCount);
    return article;
  }
}
