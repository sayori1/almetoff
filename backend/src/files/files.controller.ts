import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileService, FileType } from './files.service';
import { ObjectId } from 'mongoose';
import { FileInterceptor } from '@nestjs/platform-express/multer';

@Controller('file')
export class FileController {
  constructor(private fileservice: FileService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    return this.fileservice.createFile(file);
  }

  @Post('image')
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile() file) {
    let path = this.fileservice.createFile(file);
    return {
      success: 1,
      file: {
        url: 'http://localhost:4000/' + path,
      },
    };
  }
}
