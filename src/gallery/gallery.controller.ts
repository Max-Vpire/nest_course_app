import { Body, Controller, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { AuthGuard } from '../auth/guard/auth.guard';

@Controller('gallery')
export class GalleryController {
  constructor(private galleryService: GalleryService) { }

  @Post()
  @UseInterceptors(FileInterceptor('gallery'))
    CreateGallery(@Body() dto: CreateGalleryDto, @UploadedFile() gallery) {
       return this.galleryService.create(dto, gallery)
      }
}