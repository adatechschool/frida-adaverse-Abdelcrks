"use server";

import { db } from ".";
import { projects } from "./schema";
import { eq } from "drizzle-orm";



type CreateProjectResult =
  | { success: true }
  | { success: false; error: string };

export async function createProject(formData: FormData): Promise<CreateProjectResult> {
  const title = formData.get("title") as string;
  const github = formData.get("github") as string;
  const demo = formData.get("demo") as string | null;
  const promo = formData.get("promo") as string;
  const theme = formData.get("theme") as string;

  if (!title || !github || !promo || !theme) {
    return { success: false, error: "Certains champs obligatoires sont manquants." };
  }

  // Exemple : vérifier si le titre existe déjà
  const existing = await db
  .select()
  .from(projects)
  .where(eq(projects.title, title))
  .limit(1);
    
  if (existing) {
    return {
      success: false,
      error: "Un projet avec ce titre existe déjà.",
    };
  }

  const slug = title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  await db.insert(projects).values({
    title,
    slug,
    urlGitHub: github,
    urlDemo: demo,
    promoId: Number(promo),
    categoryId: Number(theme),
  });

  return { success: true };
}

