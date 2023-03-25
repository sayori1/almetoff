import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type ProjectDocument = Project & Document;
@Schema()
export class Project {
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
}
export const ProjectSchema = SchemaFactory.createForClass(Project);
