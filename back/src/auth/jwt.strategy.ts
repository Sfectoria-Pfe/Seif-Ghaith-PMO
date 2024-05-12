import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,  
      secretOrKey: 'sfectoria',
    });
  }

  async validate(payload: any) { // payload is the decoding of the JWT payload={id:...}
    const user = await this.prisma.user.findUnique({
      where: { id: payload.id },
    });
    request['user'] = payload;
    console.log(payload)
    return payload;
  }
}
