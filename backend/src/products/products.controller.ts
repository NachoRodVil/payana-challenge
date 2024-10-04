import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductController {
  constructor(
    private readonly productsService: ProductsService,
  ) {}


  @Post()
  async createProduct(
    @Body('name') name: string,
    @Body('price') price: number,
  ){
    return await this.productsService.createProduct(name,price)
  }

  @Get(":id")
  async getProduct(
    @Param('id') id: string,
  ){
    return await this.productsService.getProduct(id)
  }

  @Patch(":id")
  async updateProduct(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
  ){
    return await this.productsService.updateProduct(id,name, price)
  }

  @Delete(":id")
  async deleteProduct(
    @Param('id') id: string,
  ){
    return await this.productsService.deleteProduct(id)
  }


}