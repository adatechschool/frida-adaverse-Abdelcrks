import { db } from "@/src/db";
import { categories, projects, promos } from "@/src/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

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
      categoryName : categories.name,
    })
    .from(projects)
    .innerJoin(promos, eq(promos.id , projects.promoId))
    .innerJoin(categories,eq(categories.id, projects.categoryId))
    .where(eq(projects.slug, slug));

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-black dark:text-zinc-300">Projet introuvable.</p>
      </main>
    );
  }

  console.log("Slug", slug);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const githubInfo = await fetch(
    `${baseUrl}/api/github-info?url=${project.urlGitHub}`,
    { next: { revalidate: 3600 } }
  ).then(res => res.json());


  return (
    <main className="min-h-screen px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-8">
          <div className="mb-4">
            <Link 
            href={`/categories/${project.categoryName}`}
            className="inline-flex items-center gap-2 text-sm "
            >
            <span className="text-black dark:text-white hover:text-zinc-100 dark:hover:text-zinc-600 transition">← Retour aux projets</span>
            </Link>
          </div>
        <div className="space-y-3 text-center">
          <h1 className="text-6xl md:text-6xl font-semibold">
            {project.title}
          </h1>
            {githubInfo?.language && (
              <p className="">
                Langage principal : <span className="font-semibold ">{githubInfo.language}</span>
              </p>
                )}
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
        <section>
            <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl bg-black/20">
              <img
                src={project.urlImage ?? "/images/default-thumbnail.png"}
                alt={`Capture du projet ${project.title}`}
                className="w-full h-auto object-contain"
              />
            </div>
          </section>
          {githubInfo?.description && (
              <p className="text-black-700  text-center dark:text-white leading-relaxed mt-6">
                {githubInfo.description}
              </p>
            )}
            {githubInfo?.readme && (
              <section className="relative mt-10 p-6 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(106,0,255,0.25),transparent_70%)] blur-2xl"></div>
              <div className="relative  bg-black/10 dark:bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
                <h2 className="text-xl font-semibold mb-4">Aperçu du README</h2>
                <pre className="whitespace-pre-wrap text-sm leading-relaxed text-black dark:text-white">
                  {githubInfo.readme.slice(0, 800)}…
                </pre>
              </div>

            </section>
            )}
        </section>
      </div>
    </main>
  );
}
