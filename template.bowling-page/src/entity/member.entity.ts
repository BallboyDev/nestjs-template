import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Member {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    birthDate: Date;

    @Column()
    joinDate: Date;

    @Column()
    grade: number
}