import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type ArticleDocument = Article & Document;

@Schema()
export class Article {
  @Prop()
  name: string;

  @Prop()
  tags: string[];

  @Prop()
  content: string;

  @Prop({ default: Date.now() })
  createdAt: Date;

  @Prop({ default: 'image/no-image.png' })
  image: string;

  @Prop({ default: 'description' })
  description: string;

  @Prop({ default: 0 })
  watchesCount: number;

  @Prop({ default: 0 })
  likesCount: number;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
