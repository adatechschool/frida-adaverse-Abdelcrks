"use client"
import Link from "next/link"
import { useState } from "react";
import { ProjectForm } from "./ProjectForm";
import { useRouter } from "next/navigation";
import { ButtonSwitchTheme } from "./ButtonSwitchTheme";

interface Category {
  id: number,
  name: string,
}

type HeaderProps = {
  categories: Category[];
  createProject: (formData: FormData) => Promise<{ success: boolean; error?: string }>;
};

export const Header = ({ categories, createProject }: HeaderProps) => {
  const router = useRouter()
  const [showForm, setShowForm] = useState(false);
  const [open, setOpen] = useState(false)

  const handleSelectCategory = (name: string) => {
    setOpen(false)
    router.push(`/categories/${name}`)
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (!value) return;
    router.push(`/categories/${value}`);
  };

  return (
    <div>
      <header className="mb-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-between border-b border-zinc-200 p-5">
        <Link href={"/"} className="text-4xl font-semibold text-black dark:text-white">
          ada
          <span className=" bg-[linear-gradient(135deg,#6A00FF_0%,#B245FC_40%,#00A8FF_100%)] bg-clip-text text-transparent">
            VERSE
          </span>
        </Link>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <ButtonSwitchTheme />

          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-black dark:text-white backdrop-blur-sm hover:bg-white/10 transition"
              >
                <span>Choisir une catégorie</span>
                <span
                  className={`text-xs transition-transform ${open ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>

              {open && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-52 rounded-2xl border border-white/10 bg-white text-black dark:text-white dark:bg-black/90 p-1 shadow-xl backdrop-blur-md z-50">
                  <button
                    onClick={() => handleSelectCategory("all")}
                    className="w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-black/5 dark:hover:bg-white/10"
                  >
                    Tous les projets
                  </button>
                  <div className="my-1 h-px bg-white/10" />
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleSelectCategory(cat.name)}
                      className="w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-black/5 dark:hover:bg-white/10"
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="bg-black px-5 py-2.5 cursor-pointer text-sm font-medium text-white rounded-full hover:bg-[linear-gradient(135deg,#6A00FF_0%,#B245FC_40%,#00A8FF_100%)] dark:bg-white dark:text-black transition"
              onClick={() => setShowForm((show) => !show)}
            >
              PUBLIER UN PROJET
            </button>
          </div>
        </div>
      </header>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <ProjectForm 
            onClose={() => setShowForm(false)} 
            createProject={createProject}  
          />
        </div>
      )}
    </div>
  )
}
