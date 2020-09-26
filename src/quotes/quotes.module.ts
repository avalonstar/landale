import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { QuotesService } from './quotes.service'
import { Quote } from './quotes.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Quote])],
  exports: [TypeOrmModule],
  providers: [QuotesService],
  controllers: [],
})
export class QuotesModule {}
