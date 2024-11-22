import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import "~/tailwind.css"
import Header from "~/components/shared/header";
import Overview from "~/components/overview";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { supabaseServerInstance } from "~/lib/utils.server";
import { type Project } from "database.types";

export const meta: MetaFunction = () => {
  return [
    { title: "Career Overview | Juan Pablo Gallegos" },
    { name: "description", content: "Frontend Developer" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {

  const { supabase, headers } = supabaseServerInstance(request);

  const { data: initialProjects, error } = await supabase
  .from('projects')
  .select('*, company (*), category (*), agile_methodology (*), technology (*)')
  .range(0, 4);
    
  if (error) {
    throw new Response("Error loading data", { status: 500 });
  }

  return json({ initialProjects }, { headers });
};


export default function Index() {
  const { initialProjects} = useLoaderData< { initialProjects: Project[] }>();

  console.log({ initialProjects });

  return (
    <div className="min-h-screen w-full text-white">
        <Header initialProjects={initialProjects} />

        <Overview initialProjects={initialProjects} />
    </div>
  );
}

