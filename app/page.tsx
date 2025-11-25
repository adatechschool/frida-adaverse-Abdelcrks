import { db } from "@/src/db";
import { projects } from "@/src/db/schema";
import Image from "next/image";


export default async function ProjectsPage() {
  const allProjects = await db.select().from(projects)
  return (
    <main>
      {allProjects.map((projects)=>(
        <div key={projects.id}>
          <h2>{projects.title}</h2>
          {/* <img src={projects.urlImage}/> */}
        </div>
      ))}
    </main>
  );
}
