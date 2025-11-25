import { db } from "@/src/db";
import { categories, projects } from "@/src/db/schema";
import { AllCategories } from "./components/AllCategories";




export default async function ProjectsPage() {
  const allCategories = await db.select().from(categories)
  const allProjects = await db.select().from(projects)

  return (
    // <main>
    //   {allProjects.map((projects)=>(
    //     <div key={projects.id}>
    //       <h2>{projects.title}</h2>
    //       {/* <img src={projects.urlImage}/> */}
    //     </div>
    //   ))}
    // </main>
    <main>
      <AllCategories
        categories={allCategories}
        projects={allProjects}
      />
    </main>
  );
}
