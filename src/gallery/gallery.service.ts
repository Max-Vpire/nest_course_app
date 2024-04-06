import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GalleryModel } from './gallery.model';
import { FilesService } from '../files/files.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { v4 as uuid} from 'uuid';

@Injectable()
export class GalleryService {
  constructor(
    @InjectModel(GalleryModel) private galleryRepositroy: typeof GalleryModel,
    private fileService: FilesService
  ) { }
  async create(dto: CreateGalleryDto, image: any) {
    const fileName = await this.fileService.CreateFile(image);
    return await this.galleryRepositroy.create({...dto, path: fileName, id: uuid()})
  }
}
