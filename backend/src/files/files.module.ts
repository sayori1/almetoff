import { Module } from '@nestjs/common';
import { FileController } from './files.controller';
import { FileService } from './files.service';

@Module({
  providers: [FileService],
  exports: [FileService],
  controllers: [FileController],
})
export class FilesModule {}
