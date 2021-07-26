import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtConfig } from './jwt.config';
import { AuthRequestPayload } from './interface/auth.interface';
import UserInterface from '../user/interface/user.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JwtConfig.secret,
    });
  }

  validate(payload: UserInterface): AuthRequestPayload {
    return { userId: payload.id, email: payload.email };
  }
}
