import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import "~/tailwind.css"
import Header from "~/components/shared/header";
import CategoryList from "~/components/category-list";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createSupabaseInstance } from "~/lib/utils.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {

  const { supabase, headers } = createSupabaseInstance(request);

  const { data: companies, error } = await supabase
    .from('companies')
    .select('*')

    console.log({companies, error});

  if (error) {
    throw new Response("Error loading data", { status: 500 });
  }

  return json({ companies }, { headers })
};


export default function Index() {
  const { companies } = useLoaderData<{ companies: unknown[] }>();

  console.log({ companies });

  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#222222] to-[#131312] text-white">
        <Header />

        <CategoryList />
    </div>
  );
}

