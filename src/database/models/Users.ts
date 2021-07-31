import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

import { gemHmac, gemBcryptHmac } from '../../utils/security';

@Entity("users")
class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = gemBcryptHmac( gemHmac(this.password), 10);
    }

}

export default Users;
