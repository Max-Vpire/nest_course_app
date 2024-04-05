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
exports.RolesController = void 0;
const common_1 = require("@nestjs/common");
const roles_service_1 = require("./roles.service");
const create_role_dto_1 = require("./dto/create-role.dto");
const swagger_1 = require("@nestjs/swagger");
const role_dto_1 = require("./dto/role.dto");
const roles_auth_decorator_1 = require("../auth/guard/roles-auth.decorator");
const roles_guard_1 = require("../auth/guard/roles.guard");
let RolesController = class RolesController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    GetAll() {
        return this.roleService.getRoles();
    }
    CreateRole(dto) {
        return this.roleService.createRoles(dto);
    }
    GetById(idx) {
        return this.roleService.getOne(idx);
    }
    GetByValue(value) {
        return this.roleService.getByValue(value);
    }
    DeleteRole(id) {
        return this.roleService.deleteRole(id);
    }
};
exports.RolesController = RolesController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all roles' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [role_dto_1.RoleDto] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "GetAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create role' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: role_dto_1.RoleDto }),
    (0, roles_auth_decorator_1.Roles)("ADMIN"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "CreateRole", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get role by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: role_dto_1.RoleDto }),
    (0, common_1.Get)('id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "GetById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get role by value' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: role_dto_1.RoleDto }),
    (0, common_1.Post)('value'),
    __param(0, (0, common_1.Body)('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "GetByValue", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete role' }),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "DeleteRole", null);
exports.RolesController = RolesController = __decorate([
    (0, swagger_1.ApiTags)('Roles'),
    (0, common_1.Controller)('roles'),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesController);
//# sourceMappingURL=roles.controller.js.map