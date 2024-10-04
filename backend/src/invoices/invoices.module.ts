import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductController } from "./invoices.controller";
import { InvoicesService } from "./invoices.service";
import { Module } from "@nestjs/common";
import { Products } from "src/entities/products.entity";
import { InvoiceItems } from "src/entities/invoiceItems.entity";
import { Invoices } from "src/entities/invoices.entity";
import { Clients } from "src/entities/clients.entity";

@Module({
    imports: [
      TypeOrmModule.forFeature([Clients]),
      TypeOrmModule.forFeature([Invoices]),
      TypeOrmModule.forFeature([InvoiceItems]),
      TypeOrmModule.forFeature([Products]),
    ],
    controllers: [ProductController],
    providers: [InvoicesService],
  })
  export class InvoicesModule {}