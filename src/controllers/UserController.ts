import { Request, Response} from 'express';
import UserRepository from '../database/repository/UserRepository';

class UserController {
    async find (req: Request, res: Response) {
        
        const id = req?.query?.id;

        if (!id) return res.status(404).json({});

        const user = await UserRepository.findById( id );
        return res.status(200).json(user);
    
    }

    async store(req: Request, res: Response) {
        const { name, email, password } = req?.body;
        
        if (!name || !email || !password ) return res.status(417)
            .json({
                received: {name, email, password}, required: {
                name:  name || 'name',
                email: email || 'email',
                password: password || 'pwd'
            }});

        const user = await UserRepository.store(req?.body);
        return res.status(200).json(user);

    }

    async findAll (req: Request, res: Response) {
        
        const user = await UserRepository.findAll();
        return res.status(200).json(user);

    }

}

export default new UserController();
