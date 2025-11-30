import { db } from "@/src/db";
import { projects } from "@/src/db/schema";
import { eq } from "drizzle-orm";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [project] = await db
    .select()
    .from(projects)
    .where(eq(projects.slug, slug));

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-zinc-300">Projet introuvable.</p>
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
            <p className="text-sm text-zinc-400">Publié le {project.publishedAt}</p>
        </div>
        <section className="flex flex-wrap justify-center gap-8">
          <a
            href={project.urlGitHub}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-orange-400 px-5 py-2 text-sm font-medium text-white hover:bg-orange-700 transition"
          >VOIR LE CODE
          </a>

          {project.urlDemo && (
            <a href={project.urlDemo}
            className="inline-flex items-center bg-orange-400 px-5 py-2 text-sm font-medium text-white hover:bg-orange-700 transition"
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
