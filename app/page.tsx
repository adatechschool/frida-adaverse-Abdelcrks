
import { db } from "@/src/db";
import { categories, projects, promos } from "@/src/db/schema";
import { AllCategories } from "./components/AllCategories";
import { isNotNull, eq, desc } from "drizzle-orm";



export default async function ProjectsPage() {
  const allCategories = await db.select().from(categories)
  const allProjects = await db
    .select({
      id: projects.id,
      title:projects.title,
      slug:projects.slug,
      urlGitHub:projects.urlGitHub,
      urlDemo:projects.urlDemo,
      urlImage:projects.urlImage,
      categoryId:projects.categoryId,
      promoId:projects.promoId,
      createdAt:projects.createdAt,
      publishedAt: projects.publishedAt,
      promoName: promos.name,
    })
    .from(projects)
    .innerJoin(promos, eq(promos.id, projects.promoId))
    .where(isNotNull(projects.publishedAt))
    .orderBy(desc(projects.publishedAt))

  return (


    <main>
      <AllCategories
        categories={allCategories}
        projects={allProjects}
      />
    </main>
  );
}
