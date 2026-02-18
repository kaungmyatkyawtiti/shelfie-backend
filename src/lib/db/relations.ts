import { defineRelations } from "drizzle-orm";
import * as schema from "./schema"

export const relations = defineRelations(schema, (r) => ({
  // Auth
  users: {
    sessions: r.many.sessions(),
    accounts: r.many.accounts(),
  },

  sessions: {
    user: r.one.users({
      from: r.sessions.userId,
      to: r.users.id,
    }),
  },

  accounts: {
    user: r.one.users({
      from: r.accounts.userId,
      to: r.users.id,
    }),
  },

  categories: {
    products: r.many.products(),
  },

  products: {
    category: r.one.categories({
      from: r.products.categoryId,
      to: r.categories.id,
    })
  }
} as const));
