import { db } from "@/src/db";
import { eq } from "drizzle-orm";
import { categories } from "@/src/db/schema";
import { projects, promos} from "@/src/db/schema";
import { ProjectCard } from "@/app/components/ProjectCard";

export default async function CategoriePage ({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const {slug} = await params
    const [categorie] = await db
    .select()
    .from(categories)
    .where((eq(categories.name, slug)))

    console.log("categories possibles:", await db.select().from(categories));

    if(!categorie) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <p className="text-lg">Catégorie introuvable !</p>
            </main>
        )
    }
    const projectsOfCategory = await db
    .select({
        id: projects.id,
      title: projects.title,
      slug: projects.slug,
      urlGitHub: projects.urlGitHub,
      urlDemo: projects.urlDemo,
      urlImage: projects.urlImage,
      categoryId: projects.categoryId,
      promoId: projects.promoId,
      createdAt: projects.createdAt,
      publishedAt: projects.publishedAt,
      promoName: promos.name,
    })
    .from(projects)
    .innerJoin(promos, eq(promos.id , projects.promoId))
    .where(eq(projects.categoryId, categorie.id))


    
    console.log("catégorie trouvé :", categorie);
    return(
        <main className="py-10">
            <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-semibold mb-8">{categorie.name}</h1>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 
            rounded-2xl border border-zinc-200 dark:border-zinc-800/70  bg-white/90 dark:bg-zinc-950/80 shadow-xl sm:px-6 sm:py-6
            ">
            {projectsOfCategory.map((project) => (
                <ProjectCard key={project.id} project={project}></ProjectCard>
            ))}
            </div>
            </div>
        </main>
    )
}