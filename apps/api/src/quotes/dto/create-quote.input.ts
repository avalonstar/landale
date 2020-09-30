import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateQuoteDTO {
  @Field(() => String)
  readonly text: string

  @Field(() => String)
  readonly quotee: string

  @Field(() => String)
  readonly quoter: string

  @Field(() => String)
  readonly year: string

  @Field(() => Date)
  readonly timestamp: Date
}
