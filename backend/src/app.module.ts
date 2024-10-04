import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clients } from './entities/clients.entity';
import { Invoices } from './entities/invoices.entity';
import { InvoiceItems } from './entities/invoiceItems.entity';
import { Products } from './entities/products.entity';
import { ClientsModule } from './clients/clients.module';
import { ProductsModule } from './products/products.module';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      migrationsRun: true,
      entities: [
        Clients,
        Invoices,
        InvoiceItems,
        Products
      ],
    }),
    ClientsModule,
    ProductsModule,
    InvoicesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
