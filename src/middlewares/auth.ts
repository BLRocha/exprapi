import { Request, Response, NextFunction } from 'express';
import UserRepository from '../database/repository/UserRepository';
import { bcryptComparePassword } from '../utils/security';
import { sign, verify } from 'jsonwebtoken';

const secret = process.env.SECRET

const auth = {
    async preAuth (req: Request, res: Response, next: NextFunction) {
        const {email , password} = req?.body;
        if (!email || !password) return res.json({});
        const user = await UserRepository.findByColumn({email});
        if (user.length === 0) return res.json({});
        const bindPassword = bcryptComparePassword(password, user[0].password);
        if (!bindPassword) return res.status(401).json({});

        const cleanUser = { ...user[0], email: "**********", password: "**********" }
        
        return res.status(200).json({
            data: cleanUser,
            token: sign({
                data: cleanUser
            }, secret, {expiresIn: '1h'})
        })
    },
    async tokenValidate(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.body.token;
            const isValid = verify(token, secret)
            
            if (isValid) return next();
        } catch(err) {
            return res.status(401).json({});
        }
    }
}

export default auth;
