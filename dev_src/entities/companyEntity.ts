import { Entity,BaseEntity,PrimaryGeneratedColumn,Column,OneToMany } from "typeorm";
import { Product } from "./productEntity";
 

 @Entity()
 export class Company extends BaseEntity { 
    @PrimaryGeneratedColumn()
    id: number;


    @Column() 
    name: string;

    @Column({ nullable: true })
    description: string;

    @OneToMany(()=>Product,(product)=>product.company,{cascade: true})
    products: Product[]; 
    
 }