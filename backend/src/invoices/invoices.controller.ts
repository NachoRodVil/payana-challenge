import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { InvoicesService } from "./invoices.service";
import { ItemsArray } from "./types/items.model";

@Controller('invoices')
export class ProductController {
  constructor(
    private readonly invoicesService: InvoicesService,
  ) {}


  @Post()
  async createInvoice(
    @Body('client_id') client_id: string,
    @Body('items') items: ItemsArray[],
  ){
    await this.invoicesService.createInvoice(client_id,items)
    return "Invoice created successfully!"
  }

  @Get(":id")
  async getInvoice(
    @Param("id") id: string
  ){
    return await this.invoicesService.getInvoice(id)
  }

  @Get()
  async getAllInvoices(
    @Param("id") id: string
  ){
    return await this.invoicesService.getAllInvoices()
  }
}