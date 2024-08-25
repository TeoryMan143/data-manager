import { defineConfig } from 'drizzle-kit';
import { envSchema } from './src/utils/validate-env';
import type { z } from 'zod';

envSchema.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}

export default defineConfig({
  dialect: 'sqlite',
  driver: 'turso',
  dbCredentials: {
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_TOKEN,
  },
  schema: 'src/utils/db/tables.ts',
});
