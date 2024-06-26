import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(username);

    if (user && this.userService.checkEqualPassword(password, user.password)) {
      return user;
    }
    return null;
  }
}