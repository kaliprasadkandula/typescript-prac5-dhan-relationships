import {PrimaryGeneratedColumn,Column,Entity,BaseEntity, OneToOne, JoinColumn} from "typeorm"
import {Profile} from './profileEntity'


@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text", nullable: true })
    name: string;

    @Column({ type: "text", nullable: true })
    Gmail: string;

    //Each user have only one profile ,use of cascade is you need not to touch db two times with help of cascade you can save user and his profile at a time no need to save seperately  
    @OneToOne(()=>Profile,{cascade: true,eager: true,onDelete:"CASCADE"}) 
    @JoinColumn()
    profile: Profile;

}
