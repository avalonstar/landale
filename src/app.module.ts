import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { QuotesModule } from './quotes/quotes.module'

@Module({
  imports: [TypeOrmModule.forRoot(), QuotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connecction: Connection) {}
}
