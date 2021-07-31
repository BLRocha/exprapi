import { getRepository } from 'typeorm';
import Users from '../models/Users';


class UserRepository {

    
    async store (body: Object) {
        const repository = getRepository(Users);
        const user = await repository.create(body);

        await repository.save(user);

        return user;
    }

    async findById(id: any) {
        const repository = getRepository(Users);
        const user = await repository.findOne({where: { id: id || 0}});
        return user;
    }

    async findAll() {
        const repository = getRepository(Users);
        const users = await repository.find();
        users.map( value => delete value.password);
        return users;
    };
    async findByColumn(column) {
        const repository = getRepository(Users);
        const users = await repository.find({where: {...column}});
        return users;
    }
}

export default new UserRepository();
