import { drizzle } from 'drizzle-orm/neon-http';
import { dbUrl } from '../env';
import { DrizzleConfig } from 'drizzle-orm';
import { relations } from './relations';

export const db = drizzle(
  dbUrl,
  { relations } as DrizzleConfig<typeof relations>
);
