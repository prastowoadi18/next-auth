import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import { getVerificationTokenByEmail } from './verification-token';
import { db } from '@/lib/db';
import { getPasswordResetTokenByEmail } from './password-reset-token';
import { getTwoFactorTokenByEmail } from './two-factor-token';

export const generateTwoFactorToken = async (email: string) => {
  const token = crypto.randomInt(100_000, 1_000_000).toString();

  // 5 minutes
  const expires = new Date(new Date().getTime() + 5 * 60 * 1000);

  const exisitingToken = await getTwoFactorTokenByEmail(email);

  if (exisitingToken) {
    await db.twoFactorToken.delete({
      where: {
        id: exisitingToken.id
      }
    });
  }

  const twoFactorToken = await db.twoFactorToken.create({
    data: {
      email,
      token,
      expires
    }
  });

  return twoFactorToken;
};

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const exisitingToken = await getPasswordResetTokenByEmail(email);

  if (exisitingToken) {
    await db.passwordResetToken.delete({
      where: {
        id: exisitingToken.id
      }
    });
  }

  const passwordRestToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires
    }
  });

  return passwordRestToken;
};

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const exisitingToken = await getVerificationTokenByEmail(email);

  if (exisitingToken) {
    await db.verificationToken.delete({
      where: {
        id: exisitingToken.id
      }
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires
    }
  });

  return verificationToken;
};
