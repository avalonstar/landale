import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Quote {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  text: string

  @Column()
  quotee: string

  @Column()
  quoter: string

  @Column()
  year: string

  @Column({ type: 'timestamp' })
  timestamp: Date

  @Column('tsvector', { select: false, name: 'quote_tsvector', nullable: true })
  quoteTSVector?: any
}
