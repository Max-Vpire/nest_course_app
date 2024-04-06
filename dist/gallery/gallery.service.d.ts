import { GalleryModel } from './gallery.model';
import { FilesService } from '../files/files.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
export declare class GalleryService {
    private galleryRepositroy;
    private fileService;
    constructor(galleryRepositroy: typeof GalleryModel, fileService: FilesService);
    create(dto: CreateGalleryDto, image: any): Promise<GalleryModel>;
}
