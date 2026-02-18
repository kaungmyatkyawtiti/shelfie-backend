import { integer, numeric, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { baseColumns, categories } from "./category-schema";

export const products = pgTable(
  "products",
  {
    ...baseColumns,
    sku: varchar("sku", { length: 50 })
      .notNull()
      .unique(),
    name: varchar("name", { length: 200 }).notNull(),
    price: numeric("price", { precision: 10, scale: 2 }).notNull(),
    inStock: integer("in_stock").default(0),
    categoryId: uuid("category_id")
      .notNull()
      .references(() => categories.id, { onDelete: "restrict" }),
  }
);

export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;
