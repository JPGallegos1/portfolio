import { Project } from "database.types";
import {
  Play,
  Globe,
  Briefcase,
  LayoutDashboard,
  FileText,
  BarChart2,
  ShoppingCart,
  Users,
  Heart,
  Stethoscope,
  Gamepad,
} from "lucide-react";
import { Link } from "@remix-run/react";
import useHoveredById from "~/hooks/useHoveredById";

type Props = {
  project: Project;
  events?: {
    onClick: (name: string) => void;
  };
};

export default function PlaylistItem({ project, events }: Props) {

  const { hoveredProjectById, handleMouseEnter, handleMouseLeave } = useHoveredById();
  const { onClick } = events || {};

  const renderProjectIcon = (name: Project["name"]) => {
    const icons: { [key: string]: JSX.Element } = {
      "Clara UI": <FileText className="w-12 h-12 text-gray-200" />,
      "Clara Dashboard": <BarChart2 className="w-12 h-12 text-gray-200" />,
      SCC: <ShoppingCart className="w-12 h-12 text-gray-200" />,
      "Hail Insurance": <Briefcase className="w-12 h-12 text-gray-200" />,
      "Life Insurance": <Briefcase className="w-12 h-12 text-gray-200" />,
      "Cellphone Insurance": <Briefcase className="w-12 h-12 text-gray-200" />,
      Modamily: <Heart className="w-12 h-12 text-gray-200" />,
      H2HI: <BarChart2 className="w-12 h-12 text-gray-200" />,
      "The Brag House": <Gamepad className="w-12 h-12 text-gray-200" />,
      "Enfoke Platform": <Stethoscope className="w-12 h-12 text-gray-200" />,
      "Life Abudance": <ShoppingCart className="w-12 h-12 text-gray-200" />,
      "Employee Selection": <Users className="w-12 h-12 text-gray-200" />,
      "Stock Control Dashboard": (
        <LayoutDashboard className="w-12 h-12 text-gray-200" />
      ),
    };
    return icons[name] || <Globe className="w-12 h-12" />;
  };

  return (
    <>
      <div
        key={project.id}
        role="button"
        tabIndex={0}
        className="group flex items-center gap-4 hover:bg-white/10 p-2 rounded-md transition-colors"
        onMouseEnter={() => handleMouseEnter(project.id)!}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => onClick ? onClick(project.name) : null}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onClick ? onClick(project.name) : null;
        }}
      >
        <div className="w-6 flex items-center justify-center">
          {hoveredProjectById === project.id ? (
            <Link
              to={`/project/${project.id}`}
              className="opacity-100 transition-opacity"
            >
              <Play className="w-5 h-5" fill="white" />
            </Link>
          ) : (
            <div className="text-sm text-white/60 opacity-100 transition-opacity">
              {project.id}
            </div>
          )}
        </div>
        <div className="relative w-12 h-12">
          {renderProjectIcon(project.name)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-medium truncate">{project.name}</h3>
          </div>
          {project.company.website && (
            <div className="flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded w-20">
              <Globe className="w-3 h-3" />
              Website
            </div>
          )}
        </div>
      </div>
    </>
  );
}
