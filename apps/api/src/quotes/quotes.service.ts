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

  count(): Promise<number> {
    return this.quotesRepository.count()
  }

  async latest() {
    return await this.quotesRepository
      .createQueryBuilder()
      .orderBy('id', 'DESC')
      .limit(1)
      .getOne()
  }

  async search(query: string) {
    return await this.quotesRepository
      .createQueryBuilder()
      .select()
      .where('tsvector @@ plainto_tsquery(:query)', { query })
      .orderBy('RANDOM()')
      .limit(1)
      .getOne()
  }

  async insert(quote: Partial<Quote>): Promise<Quote> {
    try {
      const data = this.quotesRepository.create(quote)
      return await this.quotesRepository.save(data, { reload: true })
    } catch (error) {
      return error
    }
  }
}
