import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UsersModule, JwtModule.register({ secret: jwtConstants.secret })],
  providers: [UsersService, AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
