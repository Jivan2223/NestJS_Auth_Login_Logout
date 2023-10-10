import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('userscreddetails')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    mobile_no: string;

}