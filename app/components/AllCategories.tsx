
interface Category {
    id: number | null,
    name: string
}

interface Project {
    id: number | null,
    categoryId: number | null,
    title: string,
    urlGitHub: string,
    urlDemo: string,
    urlImage: string,
    publishedAt: string,
}


interface AllCategoriesProps {
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
                    <section key={category.id} className="py-10">
                        <h2 className="text-2xl font-semibold">{category.name}</h2>

                        <div className="bg-blue-500 p-10">
                            {projectsOfCategory.map((project) => (
                                <div key={project.id}>
                                    <h3>{project.title}</h3>
                                    <img className="w-xs"
                                    src={project.urlImage}
                                    />
                                    <p >{project.urlGitHub}</p>
                                    <p>{project.urlDemo}</p>
                                    <p>{project.publishedAt}</p>
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