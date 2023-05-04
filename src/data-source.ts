import "reflect-metadata"
import { DataSource } from "typeorm"
import { CategoryEntity } from "./entities/category"
import { ProductsEntity } from "./entities/products"
import { FormEntity } from "./entities/forma"
import { BlogEntity } from "./entities/blog"
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "DJ9USbp%iLou",
    database: "balon_b",
    synchronize: true,
    logging: false,
    entities: [CategoryEntity , ProductsEntity , BlogEntity , FormEntity],
    migrations: [],
    subscribers: [],
})
