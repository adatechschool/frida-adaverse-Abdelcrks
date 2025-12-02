import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {

    const repoUrl = req.nextUrl.searchParams.get("url")

    if (!repoUrl){
        return Response.json ({error : "Mauvaise url"}, {status : 400})
    }

    const parts = repoUrl.split("github.com/")[1]
    const [user, repo] = parts.split("/")

    return Response.json ({ user:user, repo:repo })
}