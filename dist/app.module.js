"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const process = require("process");
const sequelize_1 = require("@nestjs/sequelize");
const users_module_1 = require("./users/users.module");
const users_model_1 = require("./users/users.model");
const auth_module_1 = require("./auth/auth.module");
const roles_module_1 = require("./roles/roles.module");
const roles_model_1 = require("./roles/roles.model");
const user_role_model_1 = require("./roles/user-role.model");
const gallery_module_1 = require("./gallery/gallery.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.${process.env.NODE}.env`,
            }),
            sequelize_1.SequelizeModule.forRoot({
                autoLoadModels: true,
                database: process.env.DB_DATABASE,
                dialect: 'postgres',
                host: process.env.DB_HOST,
                models: [
                    users_model_1.UsersModel,
                    roles_model_1.RolesModel,
                    user_role_model_1.UserRoleModel
                ],
                password: process.env.DB_PASSWORD,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USER,
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            roles_module_1.RolesModule,
            gallery_module_1.GalleryModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map