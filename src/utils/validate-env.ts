import { z } from 'zod';

export const envSchema = z.object({
  DATABASE_URL: z.string(),
  DATABASE_TOKEN: z.string(),
});
