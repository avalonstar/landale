import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import { configuration, graphQLModule, typeOrmModule } from './config'
import { validationSchema } from './config/validation'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration, typeOrmModule, graphQLModule],
      validationSchema,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) =>
        configService.get('typeOrmModule'),
      inject: [ConfigService],
    }),
    GraphQLModule.forRootAsync({
      useFactory: (ConfigService: ConfigService) =>
        ConfigService.get('graphQLModule'),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class CoreModule {}
