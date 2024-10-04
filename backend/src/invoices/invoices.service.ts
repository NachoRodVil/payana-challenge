import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Clients } from "src/entities/clients.entity";
import { InvoiceItems } from "src/entities/invoiceItems.entity";
import { Invoices } from "src/entities/invoices.entity";
import { Products } from "src/entities/products.entity";
import { DataSource, Repository } from "typeorm";
import { ItemsArray } from "./types/items.model";

@Injectable()
export class InvoicesService {
    constructor(
        private dataSource: DataSource,
        @InjectRepository(Invoices)
        private readonly invoicesRepository: Repository<Invoices>,
    ) { }

    async createInvoice(client_id: string, items: ItemsArray[]) {
        try {
            const queryRunner = this.dataSource.createQueryRunner();
            await queryRunner.connect();
            await queryRunner.startTransaction();
            try {
                const client = await queryRunner.manager.findOne(Clients, {where:{id: client_id}})
                const invoice = new Invoices()
                invoice.total = 0
                invoice.client =client
                await queryRunner.manager.save(invoice)
                for (const item of items){
                    const product = await queryRunner.manager.findOne(Products, {where:{id: item.id}})
                    const invoiceItem = new InvoiceItems()
                    invoiceItem.product = product
                    invoiceItem.invoice = invoice
                    invoiceItem.price = product.price * item.quantity
                    invoiceItem.quantity = item.quantity
                    await queryRunner.manager.save(invoiceItem)
                    invoice.total += product.price * item.quantity
                }
                await queryRunner.manager.save(invoice)
                await queryRunner.commitTransaction();
            } catch (e) {
                await queryRunner.rollbackTransaction();
                throw e;
            } finally {
                await queryRunner.release();
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    async getInvoice(id: string) {
        try {
            return await this.invoicesRepository.createQueryBuilder("invoice")
            .where("invoice.id = :id", {id})
            .leftJoinAndSelect("invoice.client", "client")
            .leftJoinAndSelect("invoice.invoiceItems", "invoiceItems")
            .leftJoinAndSelect("invoiceItems.product", "product")
            .getOne()
        } catch (error) {
            throw new Error(error);
        }
    }

    async getAllInvoices() {
        try {
            return await this.invoicesRepository.createQueryBuilder("invoice")
            .leftJoinAndSelect("invoice.client", "client")
            .leftJoinAndSelect("invoice.invoiceItems", "invoiceItems")
            .leftJoinAndSelect("invoiceItems.product", "product")
            .getMany()
        } catch (error) {
            throw new Error(error);
        }
    }
}