import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
let bcrypt = require('bcryptjs');

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    const isMatch = await bcrypt.compare(pass, user?.password)

    if (user && isMatch) {
        const payload = { sub: user.id, username: user.nickname };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
    }
    throw new UnauthorizedException();
  }
}