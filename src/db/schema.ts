import { pgTable, serial, text, date, integer } from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
    id: serial("id").primaryKey(),
    name: text("name").notNull().unique(),
})

export const promos = pgTable("promos", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    dateStart: date("date_start").notNull(),
})


export const projects = pgTable("projects", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    slug: text("slug").notNull().unique(),
    urlGitHub: text("url_github").notNull(),
    urlDemo: text("url_demo"),
    urlImage: text("url_image"),
    categoryId: integer("category_id").references(() => categories.id, {
        onDelete: "set null",
    }),
    promoId: integer("promo_id").references(() => promos.id, {
        onDelete: "set null",
    }),
    createdAt: date("created_at").defaultNow().notNull(),
    publishedAt: date("published_at")
})


