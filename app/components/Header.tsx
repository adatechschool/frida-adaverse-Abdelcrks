"use client"
import Link from "next/link"
import { useState } from "react";
import { ProjectForm } from "./ProjectForm";

type HeaderProps = {
    onClose: () => void
}

export const Header = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div>
            <header className="mb-6 mt-3  flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <Link href={"/"} className="text-4xl font-semibold text-white">ada<span className="text-orange-300">VERSE</span></Link>

                <div className="flex items-center gap-8">
                    <Link href={"/"} className="rounded-full cursor-pointer  px-3 py-2.5 text-sm ">
                        TOUT LES PROJETS ⌄
                    </Link>
                    <button
                        className=" bg-orange-500 px-5 py-2.5  cursor-pointer text-sm font-medium text-white"
                        onClick={() => { setShowForm((show) => !show), console.log("etat", showForm) }}>
                        PUBLIER UN PROJET
                    </button>
                </div>
            </header>
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                <ProjectForm onClose={() => setShowForm(false)} />
                </div>
            )}
        </div>
    )
}