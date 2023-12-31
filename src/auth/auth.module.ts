import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './service/auth.service';
import { BusinessModule } from '../business/business.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

@Module({
  imports: [
    BusinessModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_TOKEN,
      signOptions: { expiresIn: '120m' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
