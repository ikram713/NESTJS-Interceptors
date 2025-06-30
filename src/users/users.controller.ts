import { Controller, Get, HttpException, UseInterceptors, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersInterceptor } from "./interceptors/users.interceptor";
import { userErrorInterceptor } from "./interceptors/error.interceptor";


@Controller("api/users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @UseInterceptors(UsersInterceptor)  
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
    @UseInterceptors(userErrorInterceptor)
    createUser() {
        // throw new HttpException("Method not implemented.", 400);
    }
}

