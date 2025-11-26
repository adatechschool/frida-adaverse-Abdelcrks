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
        // promoName: string
}

export const ProjectCard = ({project}:{project:projectCardProps}) => {

     const image = project.urlImage

    return (
        <Link href={``} className="block">
            <article className="group relative h-60 w-full overflow-hidden cursor-pointer shadow-2xl rounded-xl">
               
                <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-600 ease-out group-hover:scale-120"
                style={{backgroundImage: `url(${image})`}}
                />
                
                <div 
                className="absolute inset-0 bg-linear-to-t from-black/30 via-black/30"/>
            </article>
            <p>{project.title}</p>
            <p className="text-zinc-300">Le {project.publishedAt}</p>
        </Link>
    )
}