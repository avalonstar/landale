import { registerAs } from '@nestjs/config'
import { GqlModuleOptions } from '@nestjs/graphql'

export const graphQLModule = registerAs(
  'graphQLModule',
  (): GqlModuleOptions => ({
    autoSchemaFile: true,
    sortSchema: true,
  }),
)
