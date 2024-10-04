import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Products } from "src/entities/products.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Products)
        private readonly productsRepositories: Repository<Products>
    ) { }

    async createProduct(name: string, price:number) {
        try {
            return await this.productsRepositories.save({ name, price })
        } catch (error) {
            throw new Error(error);
        }
    }

    async getProduct(id: string) {
        try {
            return await this.productsRepositories.findOne({ where: { id } })
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateProduct(id: string, name: string, price: number) {
        try {
            const product = await this.productsRepositories.findOne({ where: { id } })
            if (product) {
                product.price = price || product.price
                product.name = name || product.name
                return await this.productsRepositories.save(product)
            } else {
                throw new Error(
                    'Error - No product found with id ' + id,
                );
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteProduct(id) {
        try {
            const product = await this.productsRepositories.findOne({ where: { id } })
            if (product) {
                return await this.productsRepositories.remove(product)
            } else {
                throw new Error(
                    'Error - No product found with id ' + id,
                );
            }
        } catch (error) {
            throw new Error(error);
        }
    }
}