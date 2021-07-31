import { Request, Response, Router } from 'express';
import auth from './middlewares/auth';

import UserController from './controllers/UserController';

const route: Router = Router();

route.get('/', (req: Request, res: Response) => {
    return res.json({
        'api': process.versions 
    });
});

route.post('/login', auth.preAuth);

route.get('/user', auth.tokenValidate, UserController.find);
route.post('/user', UserController.store);
route.get('/users', auth.tokenValidate ,UserController.findAll);

route.use((req: Request, res: Response) => {
    const path = req?.url || '?';
    return res.json({
        'uri_path': `${path} not found :(`
    });
});

export default route;
