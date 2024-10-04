import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
  } from 'typeorm';
import { CustomBaseEntity } from './base.entity';
import { IsEmail } from 'class-validator';
import { Invoices } from './invoices.entity';
import { Products } from './products.entity';

@Entity('invoice_items')
export class InvoiceItems extends CustomBaseEntity {
    @Column({type: 'decimal', precision: 10, scale: 2})
    price!: number;

    @Column()
    quantity!: number;

    @Column()
    invoice_id!: string;

    @Column()
    product_id!: string;

    @ManyToOne(() => Products, { onDelete: 'CASCADE' })
    @JoinColumn({name: "product_id"})
    product: Products

    @ManyToOne(() => Invoices, { onDelete: 'CASCADE' })
    @JoinColumn({name: "invoice_id"})
    invoice: Invoices
}
