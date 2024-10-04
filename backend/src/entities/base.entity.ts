import {

    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  export class CustomBaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  }
  