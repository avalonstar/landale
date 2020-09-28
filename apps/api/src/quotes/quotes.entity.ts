import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class Quote {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column()
  @Field()
  text: string

  @Column()
  @Field()
  quotee: string

  @Column()
  @Field()
  quoter: string

  @Column()
  @Field()
  year: string

  @Column({ type: 'timestamp' })
  @Field()
  timestamp: Date

  @Column('tsvector', { select: false, name: 'tsvector', nullable: true })
  tsvector?: any
}
