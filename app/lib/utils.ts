import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { createClient } from "@supabase/supabase-js";
import { Database, Project } from "database.types";
import type { Dispatch, SetStateAction } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY!;
const supabaseBucket = import.meta.env.VITE_SUPABASE_BUCKET!;

export const supabaseClientInstance = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey
);

export const downloadFile = async (
  fileToDownload: string,
  setter: Dispatch<SetStateAction<string | null>>
) => {
  const { data, error } = await supabaseClientInstance.storage
    .from(supabaseBucket)
    .download(fileToDownload);

  if (error) {
    console.error("Error downloading file:", error);
  } else {
    const blob =
      data instanceof Blob
        ? data
        : new Blob([data], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    setter(url);
  }
};

export function formatProjects(newProjects: any): Project[] {
  return newProjects.map((project: Project) => ({
    description: project.description!,
    team_size: project.team_size!,
    company: {
      id: project.company_id!,
      name: project.company?.name || "",
      company_logo: project.company?.logo_url || "",
      company_name: project.company?.name || "",
      description: project.company?.description || "",
      website: project.company?.website || "",
      logo_url: project.company?.logo_url || "",
    },
    category: project.category!,
    agile_methodology: project.agile_methodology!,
    technology: project.technology!,
    thumbnail: project.thumbnail_url || "",
    id: project.id!,
    name: project.name!,
    company_id: project.company_id!,
    status: project.status!,
    start_date: project.start_date!,
    end_date: project.end_date!,
    project_type: project.project_type!,
  }));
}

export function toKebabCase(name: string): string {
  return name
    .replace(/([a-z])([A-Z])/g, '$1-$2') 
    .replace(/\s+/g, '-')               
    .toLowerCase();                     
}