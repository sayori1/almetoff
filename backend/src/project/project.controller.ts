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
import { ProjectService } from './project.service';
import { ObjectId } from 'mongoose';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
@Controller('/project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'picture', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
    ]),
  )
  create(@UploadedFiles() files, @Body() dto) {
    const { picture, audio } = files;
    return this.projectService.create(dto, picture[0], audio[0]);
  }
  @Get()
  getAll(@Query('count') count: number, @Query('offset') offset: number) {
    return this.projectService.getAll(count, offset);
  }
  @Get('/search')
  search(@Query('query') query: string) {
    return this.projectService.search(query);
  }
  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.projectService.getOne(id);
  }
  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.projectService.delete(id);
  }
}
