"use client"

import { useState } from "react"
import { createProject } from "@/src/db/action";



export const ProjectForm = ({onClose}: {onClose :() => void}) => {
    // const [error, setError] = useState("")
    const [formProject, setFormProject] = useState({ 
        title: "",
        github: "",
        demo : "",
        promo : "",
        theme : "",
    });


    const isFormValid = 
    formProject.title.trim() !== "" && 
    formProject.github.trim() !== "" && 
    formProject.promo.trim() !== "" && 
    formProject.theme.trim() !== ""  
    

    const handleAction = async (formData: FormData) => {
        if(!isFormValid)
            return
        await createProject(formData)
        onClose
    }

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     console.log("Données prêtes", formProject)


    //     onClose()
    // }


    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()

    //     const form = e.currentTarget
    //     const formData = new FormData(form)
    //     const title = formData.get("title")
    //     const github = formData.get("github")
    //     const demo = formData.get("demo")
    //     const promo = formData.get("promo")
    //     const theme = formData.get("theme")

    //     console.log({ title, github, demo, promo, theme });

    //     // if (!title || !github  || !promo || !theme ){
    //     //     setError("Tout les champs sont obligatoires")
    //     //     return
    //     // }

    //     // setError("")
    // }

    return (
        <div className="flex justify-center">
            <form action={handleAction}
            className="relative mt-10 p-10 w-[450px] bg-white text-black flex flex-col items-center gap-10 rounded-2xl"
            >
                <button className="absolute left-4 top-4 text-red-600 text-xl cursor-pointer"
                onClick={onClose}
                >❌</button>
                <h1 className="text-2xl">Publier un projet</h1>

                <label htmlFor="title" >Titre</label>
                <input type="text"  id="title" name="title" placeholder="Quizz Marvel"  required
                value={formProject.title}
                onChange={(e) => setFormProject((prev)=>({...prev, title: e.target.value}))}/>
                <label htmlFor="github">Lien Github</label>
                <input type="url" id="github"name="github" placeholder="www.github.com" required
                value={formProject.github}
                onChange={(e) => setFormProject((prev)=>({...prev, github: e.target.value}))}/>
                <label htmlFor="demo">Lien Démo</label>
                <input type="url" id="demo" name="demo" placeholder="www.quizz-marvel.vercel.app"
                value={formProject.demo}
                onChange={(e) => setFormProject((prev)=>({...prev, demo: e.target.value}))} />

                <label htmlFor="promo">Promo</label>
                <select name="promo" id="promo" required
                value={formProject.promo}
                onChange={(e) => setFormProject((prev)=>({...prev, promo: e.target.value}))}>
                    <option value="1">Frida</option>
                    <option value="2">Graces</option>
                </select>

                <label htmlFor="theme">Catégorie</label>
                <select name="theme" id="theme" required
                value={formProject.theme}
                onChange={(e) => setFormProject((prev)=>({...prev, theme: e.target.value}))}>
                    <option value="1">Quizz</option>
                    <option value="2">Dataviz</option>
                    <option value="3">Adacheckevent</option>
                </select>

                <button  type="submit" disabled={!isFormValid}
                className={`p-3.5 text-white rounded-full ${
                    isFormValid ? "bg-orange-500 cursor-pointer" : "bg-gray-400 cursor-not-allowed"
                  }`}>
                    Envoyer</button>
            </form>
        </div>
    )
}
