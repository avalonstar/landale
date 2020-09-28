import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Quote } from './quotes.entity'

@Injectable()
export class QuotesService {
  constructor(
    @InjectRepository(Quote)
    private quotesRepository: Repository<Quote>,
  ) {}

  findAll(): Promise<Quote[]> {
    return this.quotesRepository.find()
  }

  findOne(id: number): Promise<Quote> {
    return this.quotesRepository.findOne(id)
  }

  findRandom(): Promise<Quote> {
    return this.quotesRepository
      .createQueryBuilder()
      .orderBy('RANDOM()')
      .limit(1)
      .getOne()
  }

  async search(query: string) {
    return await this.quotesRepository
      .createQueryBuilder()
      .select()
      .where('quote_tsvector @@ plainto_tsquery(:query)', { query })
      .orderBy('RANDOM()')
      .limit(1)
      .getOne()
  }

  async remove(id: string): Promise<void> {
    await this.quotesRepository.delete(id)
  }
}
