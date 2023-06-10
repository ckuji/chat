import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getAll() {
        return this.userService.getAllUsers();
    }

    @Post()
    async create(@Body() dto: CreateUserDto) {
        return this.userService.createUser(dto);
    }
}

