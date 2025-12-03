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


export const ProjectCard = async ({project}:{project:projectCardProps}) => {
     const image = project.urlImage ?? "/images/default-thumbnail.png"


     const baseUrl = process.env.BASE_URL;
     console.log("BASE URL ", baseUrl);

     const githubInfo = await fetch(`${baseUrl}/api/github-info?url=${project.urlGitHub}`,
       { next: { revalidate: 3600 } }
     ).then((res) => res.json());

    return (
        <Link href={`/projects/${project.slug}`} className="block w-full max-w-2xl">
            <article 
            className="group relative w-full h-82 sm:h72 lg:h-96 overflow-hidden cursor-pointer shadow-2xl rounded-xl">
                <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-600 ease-out group-hover:scale-120 "
                style={{backgroundImage: `url(${image})`}}
                >
                <p className="absolute top-3 right-4 bg-[linear-gradient(135deg,#6A00FF_0%,#B245FC_40%,#00A8FF_100%)] lg:text-lg sm:text-sm px-3 py-1 rounded">{project.promoName.toUpperCase()}</p>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/30"/>
                
                {githubInfo?.language && ( 
                    <span
                    className="absolute bottom-3 right-3 px-2 py-1 text-xs font-medium rounded-md bg-violet-600/15  text-violet-400 backdrop-blur-sm border border-violet-500/30 ">
                    {githubInfo.language}
                    </span>
                )}

            </article>
            <p className="text-black dark:text-white lg:text-[18px] sm:text-sm">{project.title}</p>
            {/* <p> debug slug {project.slug}</p> */}
            <p className="text-zinc-700 dark:text-zinc-300">Le {project.publishedAt}</p>

        </Link>
    )
}