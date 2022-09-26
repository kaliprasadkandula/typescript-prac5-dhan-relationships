import {PrimaryGeneratedColumn,Column,Entity,BaseEntity} from "typeorm"



@Entity()
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text", nullable: true })
    gender: string;

    @Column({ type: "integer", nullable: true })
    age: number;

}
