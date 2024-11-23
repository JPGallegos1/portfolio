import type { Route } from "./+types/home";
import type { MetaFunction } from "react-router";
import "~/tailwind.css"
import Header from "~/components/shared/header";
import Overview from "~/components/overview";
import { useLoaderData, data } from "react-router";
import { supabaseServerInstance } from "~/lib/utils.server";
import { type Project } from "database.types";

export const meta: MetaFunction = () => {
  return [
    { title: "Career Overview | Juan Pablo Gallegos" },
    { name: "description", content: "Frontend Developer" },
  ];
};

export async function loader ({request}: Route.LoaderArgs) {

  const { supabase, headers } = supabaseServerInstance(request);

  const { data: initialProjects, error } = await supabase
  .from('projects')
  .select('*, company (*), category (*), agile_methodology (*), technology (*)')
  .range(0, 4);
    
  if (error) {
    throw new Response("Error loading data", { status: 500 });
  }

  return data({initialProjects}, { headers });
}

export default function Index() {
  const { initialProjects } = useLoaderData<{ initialProjects: Project[] }>();

  return (
    <div className="min-h-screen w-full text-white">
        <Header initialProjects={initialProjects} />

        <Overview initialProjects={initialProjects} />
    </div>
  );
}

