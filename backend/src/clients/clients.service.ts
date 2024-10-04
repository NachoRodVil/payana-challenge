import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Clients } from "src/entities/clients.entity";
import { Repository } from "typeorm";

@Injectable()
export class ClientsService {
    constructor(
        @InjectRepository(Clients)
        private readonly clientsRepositories: Repository<Clients>
    ) { }

    async createClient(name: string, email) {
        try {
            return await this.clientsRepositories.save({ name, email })
        } catch (error) {
            throw new Error(error);
        }
    }

    async getClient(id: string) {
        try {
            return await this.clientsRepositories.findOne({ where: { id } })
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateClient(id: string, name: string, email: string) {
        try {
            const client = await this.clientsRepositories.findOne({ where: { id } })
            if (client) {
                client.email = email || client.email
                client.name = name || client.name
                return await this.clientsRepositories.save(client)
            } else {
                throw new Error(
                    'Error - No client found with id ' + id,
                );
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteClient(id) {
        try {
            const client = await this.clientsRepositories.findOne({ where: { id } })
            if (client) {
                return await this.clientsRepositories.remove(client)
            } else {
                throw new Error(
                    'Error - No client found with id ' + id,
                );
            }
        } catch (error) {
            throw new Error(error);
        }
    }
}