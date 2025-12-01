"use client"

import { useState } from "react"
import { createProject } from "@/src/db/action";



export const ProjectForm = ({ onClose }: { onClose: () => void }) => {
    // const [error, setError] = useState("")
    const [formError, setFormError] = useState<string | null>(null);
    const [formProject, setFormProject] = useState({
        title: "",
        github: "",
        demo: "",
        promo: "",
        theme: "",
    });


    const isFormValid =
        formProject.title.trim() !== "" &&
        formProject.github.trim() !== "" &&
        formProject.promo.trim() !== "" &&
        formProject.theme.trim() !== ""


        const handleAction = async (formData: FormData) => {
            if (!isFormValid) return;
          
            const result = await createProject(formData);
          
            if (!result.success) {
              setFormError(result.error);
              return;
            }
          
            setFormError(null);
            onClose();
          };
          

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
    // p-15 md:p-20
    return (
        <div className="flex justify-center px-4">
            <form 
                action={handleAction}
                className="
              relative 
              mt-10
              w-full max-w-md 
              lg:p-20 sm: p-12 md:15
              bg-white text-black 
              flex flex-col items-center gap-6 
              rounded-2xl shadow-xl
            ">
                <button className="absolute left-4 top-4 text-red-600 text-xl cursor-pointer" onClick={onClose}>❌</button>
                <h1 className="text-2xl font-semibold">Publier un projet</h1>

                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="title">Titre <span className="text-red-500">*</span></label>
                    <input type="text" id="title" name="title" placeholder="Quizz Marvel" required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        value={formProject.title}
                        onChange={(e) =>
                            setFormProject((prev) => ({ ...prev, title: e.target.value }))
                        }/>
                </div>

                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="github">Lien Github <span className="text-red-500">*</span></label>
                    <p className="text-zinc-500 sm: text-[7px]    sm:text-[10px]  text-xs">
                    💡 Astuce : Pense à ajouter un fichier thumbnail.png à la racine de ton dépôt GitHub.
                    Il sera automatiquement utilisé comme image d’aperçu du projet.</p>
                    <input type="url" id="github" name="github" placeholder="www.github.com" required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        value={formProject.github}
                        onChange={(e) =>
                            setFormProject((prev) => ({ ...prev, github: e.target.value }))
                        }/>
                </div>

                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="demo">Lien Démo</label>
                    <input type="url" id="demo" name="demo" placeholder="www.quizz-marvel.vercel.app"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        value={formProject.demo}
                        onChange={(e) =>
                            setFormProject((prev) => ({ ...prev, demo: e.target.value }))
                        }/>
                </div>

                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="promo">Promo <span className="text-red-500">*</span></label>
                    <select name="promo" id="promo" required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        value={formProject.promo}
                        onChange={(e) =>
                            setFormProject((prev) => ({ ...prev, promo: e.target.value }))
                        }>
                        <option value="">Sélectionner</option>
                        <option value="1">Frida</option>
                        <option value="2">Graces</option>
                    </select>
                </div>

                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="theme">Catégorie <span className="text-red-500">*</span></label>
                    <select name="theme" id="theme" required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2"
                        value={formProject.theme}
                        onChange={(e) =>
                            setFormProject((prev) => ({ ...prev, theme: e.target.value }))
                        }>
                        <option value="">Sélectionner</option>
                        <option value="1">Quizz</option>
                        <option value="2">Dataviz</option>
                        <option value="3">Adacheckevent</option>
                    </select>
                </div>

                <button
                    type="submit" disabled={!isFormValid}
                    className={`w-full py-3 rounded-full text-white transition 
                        ${isFormValid ? "bg-orange-500 hover:bg-orange-600": "bg-gray-400 cursor-not-allowed"}`}>
                    Envoyer
                </button>
                {formError && (<p className="mt-2 text-sm text-red-600 text-center">{formError}</p>)}
            </form>
        </div>
    );
};
