import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
export declare class GalleryController {
    private galleryService;
    constructor(galleryService: GalleryService);
    CreateGallery(dto: CreateGalleryDto, gallery: any): Promise<import("./gallery.model").GalleryModel>;
}
