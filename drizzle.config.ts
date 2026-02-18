import { defineConfig } from 'drizzle-kit';
import { dbUrl } from "./src/lib/env"

export default defineConfig({
  out: './drizzle',
  schema: './src/lib/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: dbUrl,
  },
});
