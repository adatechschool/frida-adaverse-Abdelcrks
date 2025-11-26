import { ProjectCard } from "./ProjectCard";

interface Category {
    id: number;
    name: string;
  }
  
interface Project {
    id: number;
    title: string;
    urlGitHub: string;
    urlDemo: string | null;
    urlImage: string | null;
    categoryId: number | null;
    promoId: number | null;
    createdAt: string;
    publishedAt: string | null;
  }
  
  export interface AllCategoriesProps {
    categories: Category[];
    projects: Project[];
  }
  

export const AllCategories = ({categories, projects}:AllCategoriesProps) => {
    


    return (
        <div className="space-y-8">
            {categories.map((category) => {
                const projectsOfCategory = projects.filter(
                    (project) => project.categoryId === category.id
                )

                return (
                    <section key={category.id} className="mt-10">
                        <h2 className="text-2xl font-semibold">{category.name} ({})</h2>

                        <div className="mt-4 p-10  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-15">
                            {projectsOfCategory.map((project) => (
                                <div key={project.id}>
                                    {/* <h3>{project.title}</hb 3>
                                    <img className="w-xs"
                                    src={project.urlImage}
                                    />
                                    <p >{project.urlGitHub}</p>
                                    <p>{project.urlDemo}</p>
                                    <p>{project.publishedAt}</p> */}
                                    <ProjectCard project={project}/>
                                </div>
                            ))}
                        
                            {projectsOfCategory.length === 0 && (
                                <p className="text-white/50">
                                    Aucun projet pour cette catégorie pour l'instant
                                </p>
                            )}

                        </div>
                    </section>
                )
            })}
        </div>
    )
}