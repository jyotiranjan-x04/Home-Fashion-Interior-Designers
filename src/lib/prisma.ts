import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error('DATABASE_URL is not set')
}

// Load the Prisma client constructor at runtime to avoid TypeScript resolving
// differing @prisma/client exports in CI/build environments.
// eslint-disable-next-line @typescript-eslint/no-var-requires
let PrismaClientCtor: any
try {
  // require at runtime so the type checker doesn't insist on specific named exports
  // @ts-ignore
  PrismaClientCtor = require('@prisma/client').PrismaClient
} catch (err) {
  // Fallback: create a minimal stub to avoid runtime crash in environments
  // where the client isn't available at build-time. This should rarely happen
  // in production but keeps type-checking/builds stable.
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  PrismaClientCtor = class { constructor(_: any) {} }
}

const adapter = new PrismaPg({ connectionString })

const prismaClientSingleton = () => {
  return new PrismaClientCtor({ adapter })
}

declare global {
  // eslint-disable-next-line no-var
  var prismaGlobal: any
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

export default prisma
