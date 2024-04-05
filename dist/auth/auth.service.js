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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(jwtService, userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async Register(userDto) {
        const hashedPassword = await bcrypt.hash(userDto.password, 10);
        const userAuth = {
            name: userDto.name,
            email: userDto.email,
            password: hashedPassword
        };
        const candidate = await this.userService.GetByEmail(userDto.email);
        if (candidate) {
            throw new common_1.HttpException('A user with this email exists', common_1.HttpStatus.BAD_REQUEST);
        }
        const user = await this.userService.create(userAuth);
        return this.generateToken(user);
    }
    async Login(userDto) {
        const user = await this.validateUser(userDto);
        return this.generateToken(user);
    }
    async validateUser(userDto) {
        const user = await this.userService.GetByEmail(userDto.email);
        if (user) {
            const passwordEquals = await bcrypt.compare(userDto.password, user.password);
            if (passwordEquals) {
                return user;
            }
            throw new common_1.UnauthorizedException({ message: 'The email or password not found!' });
        }
        throw new common_1.UnauthorizedException({ message: 'The email or password not found!' });
    }
    async generateToken(user) {
        const payload = {
            email: user.email,
            name: user.name,
            id: user.id,
            roles: user.roles
        };
        return {
            token: this.jwtService.sign(payload)
        };
    }
    async Profile(token) {
        return this.jwtService.verifyAsync(token);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        users_service_1.UsersService])
], AuthService);
//# sourceMappingURL=auth.service.js.map