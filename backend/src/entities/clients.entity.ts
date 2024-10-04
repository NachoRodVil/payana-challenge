import {
    Column,
    Entity,
    OneToMany,
  } from 'typeorm';
import { CustomBaseEntity } from './base.entity';
import { IsEmail } from 'class-validator';
import { Invoices } from './invoices.entity';

@Entity('clients')
export class Clients extends CustomBaseEntity {
  @Column({type: 'varchar', length: 100})
  name!: string;

  @Column({type: 'varchar', length: 100,unique: true})
  @IsEmail()
  email!: string;

  @OneToMany(() => Invoices, (invoices) => invoices.client)
  invoices: Invoices[];
}