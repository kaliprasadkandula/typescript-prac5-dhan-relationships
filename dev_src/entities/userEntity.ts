import {PrimaryGeneratedColumn,Column,Entity,BaseEntity} from "typeorm"



@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text", nullable: true })
    name: string;

    @Column({ type: "text", nullable: true })
    Gmail: string;

}
