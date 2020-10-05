import { Injectable } from '@nestjs/common'
import { registerAs } from '@nestjs/config'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  autoLoadEntities: true,
  synchronize: true,
  logging: true,
  logger: 'file',
}

export const typeOrmModule = registerAs(
  'typeOrmModule',
  (): TypeOrmModuleOptions => typeOrmConfig,
)

export default typeOrmConfig
