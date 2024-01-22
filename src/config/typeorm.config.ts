import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Stock } from "src/source/stock/entities/stock.entity/stock.entity";

export const typeORMConfig : TypeOrmModuleOptions = {
    type: 'mariadb',
    host: 'HOSTNAME',
    port: 3306,
    username: 'USERNAME',
    password: 'PASSWORD',
    database: 'DATABASE',
    entities: [],
    synchronize: false,
}