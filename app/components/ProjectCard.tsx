import Link from "next/link";

interface projectCardProps {
        id: number;
        title: string;
        urlGitHub: string;
        urlDemo: string | null;
        urlImage: string | null;
        categoryId: number | null;
        promoId: number | null;
        createdAt: string;
        publishedAt: string | null;
        slug: string ;
        promoName: string
}

export const ProjectCard = ({project}:{project:projectCardProps}) => {

     const image = project.urlImage
    return (
        <Link href={`/projects/${project.slug}`} className="block w-full max-w-2xl">
            <div className="">
            <article 
            className="group relative w-full h-82 sm:h72 lg:h-96 overflow-hidden cursor-pointer shadow-2xl rounded-xl"
            // style={{minWidth: '600px', maxWidth: '1200px'}} 
          >
               
                <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-600 ease-out group-hover:scale-120 "
                style={{backgroundImage: `url(${image})`}}
                >
                <p className="absolute top-3 right-4 bg-orange-500 px-3 py-1 rounded">{project.promoName.toLocaleUpperCase()}</p>
                </div>
                <div 
                className="absolute inset-0 bg-linear-to-t from-black/30 via-black/30"/>
            </article>
            </div>
            <p>{project.title}</p>
            {/* <p> debug slug {project.slug}</p> */}
            <p className="text-zinc-300">Le {project.publishedAt}</p>

        </Link>
    )
}