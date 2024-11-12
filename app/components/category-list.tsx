import { Link } from "@remix-run/react";
import { ChevronRight } from "lucide-react";
import { Badge } from "./ui/badge";

const colors = [
  "from-teal-500",
  "from-yellow-500",
  "from-red-500",
  "from-blue-500",
  "from-green-500",
  "from-purple-500",
];
// generate a function for random color
const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

// Define an object for each company
// The company could have many projects

const companies = [
    {
        id: 1,
        name: "Clara",
        website: "https://www.clara.co",
        description: "Clara is a digital platform designed to simplify the legal and operational aspects of starting and managing a business, particularly for startups.",
        logo: "/clara-logo.png",
        projects: [
            {
                id: 1,
                name: "Clara UI",
                description: "Clara is a digital platform designed to simplify the legal and operational aspects of starting and managing a business, particularly for startups.",
                categories: ["business_operations", "enterprise_software"],
                technologies: ["react", "material-ui", "rest-api", "python", "nodejs"],
                agile_methodologies: ["scrum", "kanban"],
                team_size: 5,
                thumbnail: "/la-cover.png",
            },
            {
                id: 2,
                name: "Clara Dashboard",
                description: "Clara is a digital platform designed to simplify the legal and operational aspects of starting and managing a business, particularly for startups.",
                category: ["ecommerce", "ai", "datavis"],
                tech_stack: ["react", "material-ui", "rest-api", "python", "nodejs"],
                agile_methodology: ["scrum", "kanban"],
                team_size: 5,
                thumbnail: "/la-cover.png",
            },
        ]
    }
]




const projects = [
  {
    id: 1,
    name: "H2HI",
    description: "Data Visualization and IA",
    company: {
      company_name: "Quorum IT",
      year: 2021,
      url: "https://quorumit.com",
      company_logo: "/quorum-logo.png",
    },
    category: ["ecommerce", "ai", "datavis"],
    tech_stack: ["react", "material-ui", "rest-api", "python", "nodejs"],
    agile_methodology: ["scrum", "kanban"],
    team_size: 5,
    thumbnail: "/la-cover.png",
  },
  {
    id: 1,
    name: "H2HI",
    description: "Data Visualization and IA",
    company: {
      company_name: "Quorum IT",
      year: 2021,
      url: "https://quorumit.com",
      company_logo: "/quorum-logo.png",
    },
    category: ["ecommerce", "ai", "datavis"],
    tech_stack: ["react", "material-ui", "rest-api", "python", "nodejs"],
    agile_methodology: ["scrum", "kanban"],
    team_size: 5,
    thumbnail: "/la-cover.png",
  },
  {
    id: 1,
    name: "H2HI",
    description: "Data Visualization and IA",
    company: {
      company_name: "Quorum IT",
      year: 2021,
      url: "https://quorumit.com",
      company_logo: "/quorum-logo.png",
    },
    category: ["ecommerce", "ai", "datavis"],
    tech_stack: ["react", "material-ui", "rest-api", "python", "nodejs"],
    agile_methodology: ["scrum", "kanban"],
    team_size: 5,
    thumbnail: "/la-cover.png",
  },
  {
    id: 1,
    name: "H2HI",
    description: "Data Visualization and IA",
    company: {
      company_name: "Quorum IT",
      year: 2021,
      url: "https://quorumit.com",
      company_logo: "/quorum-logo.png",
    },
    category: ["ecommerce", "ai", "datavis"],
    tech_stack: ["react", "material-ui", "rest-api", "python", "nodejs"],
    agile_methodology: ["scrum", "kanban"],
    team_size: 5,
    thumbnail: "/la-cover.png",
  },
  {
    id: 1,
    name: "H2HI",
    description: "Data Visualization and IA",
    company: {
      company_name: "Quorum IT",
      year: 2021,
      url: "https://quorumit.com",
      company_logo: "/quorum-logo.png",
    },
    category: ["ecommerce", "ai", "datavis"],
    tech_stack: ["react", "material-ui", "rest-api", "python", "nodejs"],
    agile_methodology: ["scrum", "kanban"],
    team_size: 5,
    thumbnail: "/la-cover.png",
  },
  {
    id: 1,
    name: "H2HI",
    description: "Data Visualization and IA",
    company: {
      company_name: "Quorum IT",
      year: 2021,
      url: "https://quorumit.com",
      company_logo: "/quorum-logo.png",
    },
    category: ["ecommerce", "ai", "datavis"],
    tech_stack: ["react", "material-ui", "rest-api", "python", "nodejs"],
    agile_methodology: ["scrum", "kanban"],
    team_size: 5,
    thumbnail: "/la-cover.png",
  },
];

export default function CategoryList() {
  return (
    <div className="min-h-screen text-white">
      <div className="container px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Made for recruiters and devs</h2>
          <Link
            to="#"
            className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
          >
            Show All
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {projects.map((project, index) => (
            <Link
              key={index}
              to="#"
              className="group relative bg-neutral-800 rounded-lg p-4 hover:bg-neutral-700 transition-colors"
            >
              <div className="relative aspect-square mb-4">
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${randomColor()} to-transparent opacity-20 rounded-md`}
                />
                <div className="relative w-full h-full">
                    <img
                      alt={`Cover for ${project.name}`}
                      className="object-cover object-top rounded-md w-full h-full"
                      src={project.thumbnail}
                    />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-sm">{project.name}</h3>
                <div className="flex items-center gap-1">
                  <Badge
                    variant="outline"
                    className=" text-slate-200 hover:bg-slate-200 hover:text-black"
                  >
                    {project.company.company_name}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-slate-200 hover:bg-slate-200 hover:text-black"
                  >
                    {project.company.year}
                  </Badge>
                </div>

                <p className="text-sm text-gray-400 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
