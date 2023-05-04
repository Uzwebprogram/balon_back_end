import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn,OneToMany} from "typeorm";
import { ProductsEntity } from "./products";


@Entity({ name: "blog" })
export class BlogEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column({ type: "varchar", length: 1000 })
    @IsString()
    link: string
    
    @Column({ type: "varchar", length: 300 })
    @IsString()
    title_uz: string

    @Column({ type: "varchar", length: 300 })
    @IsString()
    title_en: string

    @Column({ type: "varchar", length: 300 })
    @IsString()
    title_ru: string


    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;


    
}