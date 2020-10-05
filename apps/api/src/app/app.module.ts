import { Module } from '@nestjs/common'
import { CoreModule } from '@landale/core'
import { Connection } from 'typeorm'

import { QuotesModule } from '../quotes/quotes.module'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [CoreModule, QuotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connecction: Connection) {}
}
