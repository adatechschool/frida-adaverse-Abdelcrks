import "dotenv/config"
import { db } from "."
import { categories,promos,projects } from "./schema"

async function main() {
    await db.insert(categories).values([
        {name: 'Quizz'},
        {name:"Dataviz"},
        {name: "AdaCheckEvent"} 
    ])

    const [promo] = await db
    .insert(promos)
    .values({
      name: "Frida",
      dateStart: "2025-05-28",
    }).returning(); // pr recup l'id

    await db.insert(projects).values({
        title: "Quizz Capitales",
        slug: "frida-quizz-capitales",
        urlGitHub: "https://github.com/Abdelcrks/Quizz-Capitale",
        urlDemo: "https://quizz-capitales-demo.vercel.app",
        urlImage: "/projects/frida/quizz/quizz-abdel.png",
        categoryId: 1,        
        promoId: promo.id,
    })
    console.log("Seed terminé");

}

main()

