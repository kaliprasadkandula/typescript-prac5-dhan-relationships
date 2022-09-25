import {PrimaryGeneratedColumn,Column,Entity} from "typeorm"



@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text", nullable: true })
    name: string;

    @Column({ type: "text", nullable: true })
    Gmail: string;

}
