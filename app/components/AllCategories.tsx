import { AutoScrollRow } from "./AutoScrollRow";
import { ProjectCard } from "./ProjectCard";
import Link from "next/link";



interface Category {
    id: number;
    name: string;
}

export interface ProjectWithPromo {
    id: number;
    title: string;
    urlGitHub: string;
    urlDemo: string | null;
    urlImage: string | null;
    categoryId: number | null;
    promoId: number | null;
    createdAt: string;
    publishedAt: string | null;
    slug: string;
    promoName: string,
}

export interface AllCategoriesProps {
    categories: Category[];
    projects: ProjectWithPromo[];
}


export const AllCategories = ({ categories, projects }: AllCategoriesProps) => {
    return (
        <div className="py-10 w-full">
            <div className="space-y-10">
                {categories.map((category) => {
                    const projectsOfCategory = projects.filter(
                        (project) => project.categoryId === category.id
                    );

                    return (
                        <section key={category.id} className="px-4 sm:px-6 lg:px-8">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-black dark:bg-white  px-3 py-2  sm:px-7 sm:py-3 lg:px-10 lg:py-3">
                                    <Link
                                        href={`/categories/${category.name}`}
                                        className="text-sm font-medium tracking-wide uppercase dark:text-black text-white hover:text-violet-300 transition-colors"
                                    >
                                        {category.name}
                                    </Link>
                                    <span className="text-xs text-zinc-200 dark:text-zinc-400">
                                        {projectsOfCategory.length} projet
                                        {projectsOfCategory.length > 1 && "s"}
                                    </span>
                                </div>
                            </div>
                            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/70  bg-white/90 dark:bg-zinc-950/80 shadow-xl px-4 py-5 sm:px-6 sm:py-6">
                                {projectsOfCategory.length === 0 ? (
                                    <p className="text-sm text-zinc-500">
                                        Aucun projet pour cette catégorie pour l'instant.
                                    </p>
                                ) : (
                                    <AutoScrollRow>
                                    {projectsOfCategory.map((project) => (
                                      <div
                                        key={project.id}
                                        className="snap-start shrink-0 w-[260px] sm:w-[300px]"
                                      >
                                        <ProjectCard project={project} />
                                      </div>
                                    ))}
                                  </AutoScrollRow>
                              
                                )}
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}