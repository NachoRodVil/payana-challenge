import {
    Column,
    Entity,
  } from 'typeorm';
import { CustomBaseEntity } from './base.entity';

@Entity('products')
export class Products extends CustomBaseEntity {
  @Column({type: 'varchar', length: 100})
  name!: string;

  @Column({type: 'decimal', precision: 10, scale: 2})
  price!: number;
}