import "dotenv/config.js"
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
      dateStart: new Date("2025-09-01").toISOString(),
    }).returning(); // pr recup l'id

    await db.insert(projects).values({
        title: "Quizz Capitales",
        urlGitHub: "https://github.com/Abdelcrks/Quizz-Capitale",
        urlDemo: "https://quizz-capitales-demo.vercel.app",
        urlImage: "https://image-url.com/quizz.png",
        categoryId: 1,        // ou une vraie id récupérée avant
        promoId: promo.id,
    })
    console.log("✅ Seed terminé");

}

