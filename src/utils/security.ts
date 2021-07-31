import { createHmac } from 'crypto';
import { hashSync, compareSync } from 'bcryptjs';
const secret = process.env.SECRET;
export const gemHmac = (plainPassText: any, alg?: string): string => {
    return createHmac(alg || 'sha256', secret).update(plainPassText).digest('hex');
};

export const plainTextHmacCompare = (plainPassword: string, hmac: string ): boolean => {
    return gemHmac(plainPassword) === hmac;
};

export const gemBcryptHmac = (hmac: string, salt: number):string => {
    return hashSync(hmac, salt);
};

export const bcryptCompare = (plainPassword: string, hashBcypt: string): boolean => {
    return compareSync(gemHmac( plainPassword ), hashBcypt);
};
