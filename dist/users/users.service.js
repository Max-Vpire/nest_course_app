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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("./users.model");
const uuid_1 = require("uuid");
const roles_service_1 = require("../roles/roles.service");
let UsersService = class UsersService {
    constructor(userRepository, roleService) {
        this.userRepository = userRepository;
        this.roleService = roleService;
    }
    async create(dto) {
        const user = await this.userRepository.create({ ...dto, id: (0, uuid_1.v4)() });
        const role = await this.roleService.getByValue("USER");
        await user.$set('roles', [role.id]);
        user.roles = [role];
        return user;
    }
    async GetAll() {
        return await this.userRepository.findAll({ include: { all: true } });
    }
    async GetOne(idx) {
        return await this.userRepository.findOne({
            where: { id: idx },
            include: { all: true }
        });
    }
    async GetByEmail(email) {
        return this.userRepository.findOne({
            where: { email: email },
            include: { all: true }
        });
    }
    async Delete(idx) {
        return await this.userRepository.destroy({
            where: { id: idx }
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(users_model_1.UsersModel)),
    __metadata("design:paramtypes", [Object, roles_service_1.RolesService])
], UsersService);
//# sourceMappingURL=users.service.js.map