import { db } from "@/src/db";
import { projects, promos } from "@/src/db/schema";
import { eq } from "drizzle-orm";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [project] = await db
    .select({
      id:projects.id,
      title:projects.title,
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
    .where(eq(projects.slug, slug));

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-black dark:text-zinc-300">Projet introuvable.</p>
      </main>
    );
  }

  console.log("Slug", slug);



  return (
    <main className="min-h-screen px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-3 text-center">
          <h1 className="text-6xl md:text-6xl font-semibold">
            {project.title}
          </h1>
            <span className="lg:text-lg sm:text-sm   text-black dark:text-zinc-400">
              Publié le {project.publishedAt}
              <span className="ml-10 inline-flex items-center justify-center px-3 py-1 bg-[linear-gradient(135deg,#6A00FF_0%,#B245FC_40%,#00A8FF_100%)] text-black dark:text-white lg:text-lg sm:text-sm font-semibold rounded-md">
                 {project.promoName.toUpperCase()}
              </span>
            </span>
        </div>
        <section className="flex flex-wrap justify-center gap-8">
          <a
            href={project.urlGitHub}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-black dark:bg-white px-5 py-3 rounded text-sm font-medium text-white dark:text-black hover:bg-[linear-gradient(135deg,#6A00FF_0%,#B245FC_40%,#00A8FF_100%)] transition"
          >VOIR LE CODE
          </a>

          {project.urlDemo && (
            <a href={project.urlDemo}
            className="inline-flex items-center bg-black dark:bg-white px-5 py-3 rounded text-sm font-medium text-white dark:text-black hover:bg-[linear-gradient(135deg,#6A00FF_0%,#B245FC_40%,#00A8FF_100%)] transition"
            >VOIR LA DÉMO
            </a>
          )}
        </section>
        <section>
          <div className="relative w-full h-100 md:h-150 md:w-200 overflow-hidden rounded-2xl shadow-2xl">
            <div className="absolute inset-0 bg-cover bg-center "style={{ backgroundImage: `url(${project.urlImage})` }}/>
          </div>
        </section>
      </div>
    </main>
  );
}
