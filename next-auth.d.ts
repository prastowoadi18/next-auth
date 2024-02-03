import { UserRole } from '@prisma/client';
import { type DefaultSession } from 'next-auth';

export type ExtendedUser = DefaultSession['user'] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
};

declare module 'next-auth' {
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: ExtendedUser;
  }
}
