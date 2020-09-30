import { Inject } from '@nestjs/common'
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'

import { Quote } from './quotes.entity'
import { QuotesService } from './quotes.service'

@Resolver(() => Quote)
export class QuotesResolver {
  constructor(@Inject(QuotesService) private quotesService: QuotesService) {}

  @Query(() => Quote)
  async quote(
    @Args('id', { type: () => Int, nullable: true }) id?: number,
    @Args('term', { nullable: true }) term?: string,
  ): Promise<Quote> {
    if (id) return await this.quotesService.findOne(id)
    if (term) return await this.quotesService.search(term)
    return await this.quotesService.findRandom()
  }

  @Mutation(() => Quote)
  async addQuote(@Args('quote', { type: () => Quote }) quote: Quote) {
    return await this.quotesService.insert(quote)
  }
}
