"use client"

import { useState } from "react"





export const ProjectForm = ({onClose}: {onClose :() => void}) => {
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="flex justify-center">
            <form action="" onSubmit={handleSubmit}
            className="relative mt-30 p-10 w-[450px] bg-white text-black flex flex-col items-center gap-10 rounded-2xl"
            >
                <button className="absolute left-4 top-4 text-red-600 text-xl"
                onClick={onClose}
                >❌</button>
                <h1 className="text-2xl">Publier un projet</h1>

                <label htmlFor="title">Titre</label>
                <input type="text" id="title" name="title" placeholder="Quizz Marvel" />
                <label htmlFor="github">Lien Github</label>
                <input type="url" id="github"name="github" placeholder="www.github.com" />
                <label htmlFor="demo">Lien Démo</label>
                <input type="url" id="demo" name="demo" placeholder="www.quizz-marvel.vercel.app" />

                <label htmlFor="promo">Promo</label>
                <select name="promo" id="promo">
                    <option value="">Frida</option>
                    <option value="">Graces</option>
                </select>

                <label htmlFor="theme">Catégorie</label>
                <select name="theme" id="theme">
                    <option value="">Quizz</option>
                    <option value="">Dataviz</option>
                    <option value="">Adacheckevent</option>
                </select>

                <button className="p-3.5 bg-orange-500 text-white rounded-full">Envoyer</button>

                <p className="text-red-700">tous les champs sont obligatoires</p>
            </form>
        </div>
    )
}
