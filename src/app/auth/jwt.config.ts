import { env } from 'process';

export const JwtConfig = {
  secret: env.JWT_SECRET,
};
