import { Request, Response, NextFunction } from 'express';
import UserRepository from '../database/repository/UserRepository';
import { gemHmac, gemBcryptHmac, bcryptCompare} from '../utils/security';
import jsonwebtoken  from 'jsonwebtoken';

const secret = process.env.SECRET

const auth = {
    async preAuth (req: Request, res: Response, next: NextFunction) {
        const {email , password} = req?.body;
        if (!email || !password) return res.json({});
        const user = await UserRepository.findByColumn({email});
        const bindPassword = bcryptCompare(password, user[0].password);
        if (!bindPassword) return res.status(401).json({});
        delete user[0].password;
        
        return res.status(200).json({
            token: jsonwebtoken.sign({
                data: user
            }, secret, {expiresIn: '1h'})
        })
    },
    async tokenValidate(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.body.token;
            const isValid = jsonwebtoken.verify(token, secret)
            
            if (isValid) return next();
        } catch(err) {
            return res.status(401).json({});
        }
    }
}

export default auth;
