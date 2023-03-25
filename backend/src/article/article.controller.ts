import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { ObjectId } from 'mongoose';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
@Controller('/article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'picture', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
    ]),
  )
  create(@UploadedFiles() files, @Body() dto) {
    const { picture, audio } = files;
    return this.articleService.create(dto, picture[0], audio[0]);
  }
  @Get()
  getAll(
    @Query('count') count: number,
    @Query('offset') offset: number,
    @Query('tag') tag: string,
  ) {
    return this.articleService.getAll(count, offset, tag);
  }
  @Get('/search')
  search(@Query('query') query: string) {
    return this.articleService.search(query);
  }
  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.articleService.getOne(id);
  }
  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.articleService.delete(id);
  }
  @Get(':id/like')
  like(@Param('id') id: ObjectId) {
    return this.articleService.like(id);
  }
}
