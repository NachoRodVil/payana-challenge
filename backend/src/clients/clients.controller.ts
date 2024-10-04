import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ClientsService } from "./clients.service";

@Controller('clients')
export class ClientController {
  constructor(
    private readonly clientsService: ClientsService,
  ) {}


  @Post()
  async createClient(
    @Body('name') name: string,
    @Body('email') email: string,
  ){
    return await this.clientsService.createClient(name, email)
  }

  @Get(":id")
  async getClient(
    @Param('id') id: string,
  ){
    return await this.clientsService.getClient(id)
  }

  @Patch(":id")
  async updateClient(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('email') email: string,
  ){
    return await this.clientsService.updateClient(id, name, email)
  }

  @Delete(":id")
  async deleteClient(
    @Param('id') id: string,
  ){
    return await this.clientsService.deleteClient(id)
  }
}