import { createHmac } from 'crypto';
import { hashSync, compareSync } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';

const secret = process.env.SECRET;

/**
 * Generate Hmac from password.
 * 
 * @param plainPassText Receive plain text.
 * @param alg Optional param, Default `sha256`, others options (sha1, sha512).
 * @param digest Optional param, Default hex, base64.
 * @returns `{string}` hashHmac.
 */
export const genHmac = (
    plainPassText: any, alg?: string, digest?: string | any
    ): string => {
    return createHmac(alg || 'sha256', secret).update(plainPassText)
        .digest(digest || 'hex');
};

/**
 * Compare plain text with before generated hmac.
 * 
 * @param plainPassword Receive plain password.
 * @param hmac Receive before Hmac generated.
 * @returns `{boolean}` Boolean.
 */
export const plainTextHmacCompare = (
    plainPassword: string, hmac: string
    ): boolean => {
    return genHmac(plainPassword) === hmac;
};

/**
 * Generate bcrypt hash from hmac.
 * 
 * @param hmac Receive a Hmac.
 * @param salt Prefer salt number, init 4.
 * @returns `{string} Bcrypt Hash.
 */
export const hmacToBcrypt = (hmac: string, salt: number):string => {
    return hashSync(hmac, salt);
};

/**
 * Compare bcrypt sign with plain password.
 * 
 * @param plainPassword Receive plain Text.
 * @param hashBcypt Bcrypt before generated hash.
 * @returns `{boolean}` Boolean.
 */
export const bcryptComparePassword = (
    plainPassword: string, hashBcypt: string
    ): boolean => {
    return compareSync( genHmac( plainPassword ), hashBcypt );
};

/**
 * 
 * @param data Received type of data `{Object}` `{String}` `{number}`.
 * @param expires Received a string Ex: `30m`, default `1h`.
 * @returns Return token `{String}`
 */
export const makeToken = (data: any, expires?: string): string => {
    return sign({ data }, secret, { expiresIn: expires || '1h' });
};

/**
 * 
 * @param token Received one token jwt
 * @returns return a boolean
 */
export const checkToken = (token: string): boolean => {
    try {
        const isValid = verify(token, secret);
        if (isValid) return true;
    } catch(err) {
        return false;
    }
};
