import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Score {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    gameId: number;

    @Column()
    score: number;
}