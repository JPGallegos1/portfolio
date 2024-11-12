import { Search, User } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Link, useLocation } from "@remix-run/react";

const navigation = [
  { name: "All", href: "/" },
  { name: "React", href: "/?category=react" },
  { name: "AI", href: "/?category=ai" },
  { name: "Data Visualization", href: "/?category=datavis" },
];

export default function Header() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const category = searchParams.get("category") || "all";

  return (
    <div className="w-full">
      <header>
        <div className="container flex h-16 items-center gap-4 px-4 justify-center">
          <div className="flex-1 flex items-center justify-center">
            <form className="flex items-center gap-2 w-full justify-center">
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="What kind of project are you looking for?"
                  className="pl-8 bg-muted/50 bg-white"
                />
              </div>
            </form>
          </div>
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
        <nav className="container px-4 pb-2">
          <ul className="flex gap-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="text-sm font-medium hover:text-slate-400 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
