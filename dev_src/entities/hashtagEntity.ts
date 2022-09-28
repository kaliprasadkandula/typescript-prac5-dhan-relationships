import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from "typeorm";
import { Tweet } from "./tweetEntity";

@Entity()
export class Hashtag extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  tag: string;

  @ManyToMany(() => Tweet, (tweet) => tweet.hashtags, { onDelete: "CASCADE" })
  tweets: Tweet[];
}
