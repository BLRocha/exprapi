import { sign, verify } from 'jsonwebtoken';

const secret = process.env.SECRET || '';

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
