import { TypeOrmModule } from "@nestjs/typeorm";
import { Clients } from "src/entities/clients.entity";
import { ClientController } from "./clients.controller";
import { ClientsService } from "./clients.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [
      TypeOrmModule.forFeature([Clients]),
    ],
    controllers: [ClientController],
    providers: [ClientsService],
  })
  export class ClientsModule {}