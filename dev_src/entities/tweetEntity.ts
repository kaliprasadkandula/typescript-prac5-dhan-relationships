import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from "typeorm";
import { Hashtag } from "./hashtagEntity";

@Entity()
export class Tweet extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  text: string;
  @ManyToMany(() => Hashtag, (hashtag) => hashtag.tweets, { cascade: true })
  @JoinTable()
  hashtags: Hashtag[]; //Hashtag
}
