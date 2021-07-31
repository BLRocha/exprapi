import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

import { genHmac, hmacToBcrypt } from '../../utils/security';

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
        this.password = hmacToBcrypt( genHmac(this.password), 10);
    }

}

export default Users;
