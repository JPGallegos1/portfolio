import { Link } from "@remix-run/react";
import {  User, Play } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { Project } from "database.types";
import { toKebabCase } from "~/lib/utils";
import useSuggestions from "~/hooks/useSuggestions";
import Navigation from "../navigation";
import SuggestionsForm from "../form/suggestions";

export default function Header({
  initialProjects,
}: {
  initialProjects: Project[];
}) {
  const [scrollY, setScrollY] = useState(0);
  const { query, setQuery, suggestions, setSuggestions, inputRef, handleInputChange } = useSuggestions(initialProjects);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const gradientOpacity = Math.min(scrollY / 200, 1);

  return (
    <div className="w-full">
      <header className="sticky top-0 z-50 bg-black text-brand-lightblue-100 shadow-md">
        <div className="container flex h-16 items-center gap-4 px-4 justify-between">
          {/* Left Section: Navigation Buttons + Search Bar */}
          <div className="flex items-center gap-4 w-full">
            <Navigation />

            <SuggestionsForm
              query={query}
              setQuery={setQuery}
              suggestions={suggestions}
              setSuggestions={setSuggestions}
              inputRef={inputRef}
              handleInputChange={handleInputChange}
            />
          </div>

          {/* Right Section: User Dropdown */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>Cuenta</DropdownMenuItem>
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Sesión privada</DropdownMenuItem>
                <DropdownMenuItem>Configuración</DropdownMenuItem>
                <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Gradient Overlay */}
        {gradientOpacity >= 0.5 && (
          <div
            className={`bg-brand-greenblue-500 text-white py-2 px-4 transition-opacity duration-300 ${
              gradientOpacity >= 0.5
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5 pointer-events-none"
            }`}
          >
            <Link
              to={`/about`}
              className="opacity-100 transition-opacity flex items-center gap-2 rounded-full px-4 py-2 text-white"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
                <Play className="h-6 w-6 fill-black text-black" />
              </div>
              <span className="text-lg font-medium">
                Browse my professional journey
              </span>
            </Link>
          </div>
        )}
      </header>

      <div className="relative w-full h-[300px] overflow-hidden">
        <img
          src="jpgallegos-banner.png"
          alt="Duki background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black to-black z-10 transition-opacity duration-100"
          style={{ opacity: gradientOpacity }}
        ></div>
      </div>
    </div>
  );
}
