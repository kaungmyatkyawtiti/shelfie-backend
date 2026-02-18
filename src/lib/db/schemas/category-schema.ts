import { pgTable, text, uuid, varchar, timestamp } from "drizzle-orm/pg-core";

export const baseColumns = {
  id: uuid("id").primaryKey().defaultRandom(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
}

export const categories = pgTable(
  "categories",
  {
    ...baseColumns,
    name: varchar("categories", { length: 200 })
      .notNull()
      .unique(),
    description: text("description"),
  }
);

export type Category = typeof categories.$inferSelect;
export type NewCategory = typeof categories.$inferInsert;
