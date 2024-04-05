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
exports.UserRoleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UserRoleDto {
}
exports.UserRoleDto = UserRoleDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'id', description: 'id' }),
    __metadata("design:type", String)
], UserRoleDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user-id', description: 'userId' }),
    __metadata("design:type", String)
], UserRoleDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'role-id', description: 'roleId' }),
    __metadata("design:type", String)
], UserRoleDto.prototype, "roleId", void 0);
//# sourceMappingURL=user-role.dto.js.map