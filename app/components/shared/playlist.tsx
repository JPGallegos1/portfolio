import { type Project } from "database.types";

import { useState } from "react";
import { formatProjects, supabaseClientInstance } from "~/lib/utils";
import { Button } from "../ui/button";
import PlaylistItem from "./playlist-item";

type Props = {
  initialProjects: Project[];
}

export default function Playlist({
  initialProjects,
}: Props) {
  const originalCount = initialProjects.length;
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [offset, setOffset] = useState(originalCount);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoreProjects = async () => {
    setIsLoading(true);
    const limit = 5;

    const { data: newProjects, error } = await supabaseClientInstance
      .from("projects")
      .select(
        "*, company (*), category (*), agile_methodology (*), technology (*)"
      )
      .range(offset, offset + limit - 1);

    if (error) {
      console.error("Error fetching more projects:", error);
    } else {
      setProjects((prevProjects) => [
        ...prevProjects,
        ...formatProjects(newProjects),
      ]);
      setOffset(
        (prevOffset) => prevOffset + formatProjects(newProjects).length
      );
    }

    setIsLoading(false);
  };

  const seeLess = () => {
    setProjects(initialProjects);
    setOffset(originalCount);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <PlaylistItem key={project.id} project={project} />
        ))}
      </div>
      <Button
        variant="link"
        className="text-white/60 hover:text-white"
        onClick={projects.length > originalCount ? seeLess : fetchMoreProjects}
      >
        {isLoading
          ? "Loading..."
          : projects.length > originalCount
          ? "See less"
          : "See more"}
      </Button>
    </div>
  );
}
