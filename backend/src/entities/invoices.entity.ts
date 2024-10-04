import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
  } from 'typeorm';
import { CustomBaseEntity } from './base.entity';
import { Clients } from './clients.entity';
import { InvoiceItems } from './invoiceItems.entity';

@Entity('invoices')
export class Invoices extends CustomBaseEntity {

  @Column({type: 'decimal', precision: 10, scale: 2})
  total!: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column()
  client_id!: string;

  @ManyToOne(() => Clients, (client) => client.invoices, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'client_id' })
  client: Clients;

  @OneToMany(() => InvoiceItems, (invoiceItems) => invoiceItems.invoice)
  invoiceItems: InvoiceItems[];
}