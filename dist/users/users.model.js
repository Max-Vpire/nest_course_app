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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const user_role_model_1 = require("../roles/user-role.model");
const roles_model_1 = require("../roles/roles.model");
const gallery_model_1 = require("../gallery/gallery.model");
let UsersModel = class UsersModel extends sequelize_typescript_1.Model {
};
exports.UsersModel = UsersModel;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'id' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
        unique: true,
        primaryKey: true
    }),
    __metadata("design:type", String)
], UsersModel.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'somebody', description: 'name' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
    }),
    __metadata("design:type", String)
], UsersModel.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'somebody@gmail.com', description: 'email' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
        unique: true
    }),
    __metadata("design:type", String)
], UsersModel.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12345', description: 'password' }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
    }),
    __metadata("design:type", String)
], UsersModel.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => roles_model_1.RolesModel, () => user_role_model_1.UserRoleModel),
    __metadata("design:type", Array)
], UsersModel.prototype, "roles", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => gallery_model_1.GalleryModel),
    __metadata("design:type", Array)
], UsersModel.prototype, "gallery", void 0);
exports.UsersModel = UsersModel = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'users', createdAt: false, updatedAt: false })
], UsersModel);
//# sourceMappingURL=users.model.js.map