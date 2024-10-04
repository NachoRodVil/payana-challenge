import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductController } from "./products.controller";
import { ProductsService } from "./products.service";
import { Module } from "@nestjs/common";
import { Products } from "src/entities/products.entity";

@Module({
    imports: [
      TypeOrmModule.forFeature([Products]),
    ],
    controllers: [ProductController],
    providers: [ProductsService],
  })
  export class ProductsModule {}