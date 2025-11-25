import Link from "next/link";

interface projectCardProps {
    project:{
        id: number;
        title: string;
        urlGitHub: string;
        urlDemo: string | null;
        urlImage: string | null;
        categoryId: number | null;
        promoId: number | null;
        createdAt: string;
        publishedAt: string | null;
        promoName: string
    }
}

export const ProjectCard = ({project}:projectCardProps) => {

    const image = project.urlImage

    return (
        <Link href={``} className="">
            <article className="relative h-60 w-full overflow-hidden cursor-pointer shadow-2xl">
                <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{backgroundImage: `url(${image})`}}
                />
                <div 
                className="absolute inset-0 bg-linear-to-t from-black/30 via-black/30"/>
            </article>
            <p>{project.title}</p>
            <p className="text-zinc-500">Le {project.publishedAt}</p>
        </Link>
    )
}