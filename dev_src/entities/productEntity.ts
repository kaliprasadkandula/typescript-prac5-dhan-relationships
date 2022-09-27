import { Entity,BaseEntity,PrimaryGeneratedColumn,Column, ManyToOne } from "typeorm";
import {Company} from './companyEntity'
 

 @Entity()
 export class Product extends BaseEntity { 
    @PrimaryGeneratedColumn()
    id: number;


    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;
   
    @Column({ nullable: true })
    price: number;

    @ManyToOne(()=>Company,(company)=>company.products)
    company: Company;
    
 }