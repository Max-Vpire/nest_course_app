"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const gallery_model_1 = require("./gallery.model");
const files_service_1 = require("../files/files.service");
const uuid_1 = require("uuid");
let GalleryService = class GalleryService {
    constructor(galleryRepositroy, fileService) {
        this.galleryRepositroy = galleryRepositroy;
        this.fileService = fileService;
    }
    async create(dto, image) {
        const fileName = await this.fileService.CreateFile(image);
        return await this.galleryRepositroy.create({ ...dto, path: fileName, id: (0, uuid_1.v4)() });
    }
};
exports.GalleryService = GalleryService;
exports.GalleryService = GalleryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(gallery_model_1.GalleryModel)),
    __metadata("design:paramtypes", [Object, files_service_1.FilesService])
], GalleryService);
//# sourceMappingURL=gallery.service.js.map