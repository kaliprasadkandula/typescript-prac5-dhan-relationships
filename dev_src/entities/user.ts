import {PrimaryGeneratedColumn,Column,Entity} from "typeorm"



@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text", nullable: false })
    name: string;

    @Column({ type: "text", nullable: false })
    email: string;

}
