import { Module } from '@nestjs/common';
import { GalleryController } from './gallery.controller';
import { GalleryService } from './gallery.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GalleryModel } from './gallery.model';
import { FilesModule } from '../files/files.module';

@Module({
  imports: [
    SequelizeModule.forFeature([GalleryModel]),
    FilesModule
  ],
  controllers: [GalleryController],
  providers: [GalleryService]
})
export class GalleryModule {}
