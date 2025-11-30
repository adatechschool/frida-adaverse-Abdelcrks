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
    slug: string;
  }
  
  export interface AllCategoriesProps {
    categories: Category[];
    projects: Project[];
  }
  

export const AllCategories = ({categories, projects}:AllCategoriesProps) => {
    


    return (
        <div className="py-10 w-full">
            <div 
            className="space-y-12"
            > 
            {categories.map((category) => {
                
                const projectsOfCategory = projects.filter(
                    (project) => project.categoryId === category.id
                )
                return (
                    <section key={category.id} className="px-4 sm:px-6 lg:px-8 mt-10">
                        <h2 className="text-2xl font-semibold">{category.name} ({projectsOfCategory.length})</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
                        {/* <div className="mt-4 p-10  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-15"> */}
                            {projectsOfCategory.map((project) => (
                                <div key={project.id}>
                                    {/* <h3>{project.title}</hb 3>
                                    <img className="w-xs"
                                    src={project.urlImage}
                                    />
                                    <p >{project.urlGitHub}</p>
                                    <p>{project.urlDemo}</p>
                                    <p>{project.publishedAt}</p> */}
                                    <ProjectCard project={project} />
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
        </div>
    )
}