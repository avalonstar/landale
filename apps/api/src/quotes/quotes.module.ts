import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { QuotesService } from './quotes.service'
import { Quote } from './quotes.entity'
import { QuotesResolver } from './quotes.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([Quote])],
  exports: [TypeOrmModule],
  providers: [QuotesService, QuotesResolver],
  controllers: [],
})
export class QuotesModule {}
