import { Search } from "lucide-react";
import { Input } from "~/components/ui/input";
import { Project } from "database.types";
import PlaylistItem from "~/components/shared/playlist-item";

type Props = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  suggestions: Project[];
  setSuggestions: React.Dispatch<React.SetStateAction<Project[]>>;
  inputRef: React.RefObject<HTMLDivElement>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SuggestionsForm({
  query,
  setQuery,
  suggestions,
  setSuggestions,
  inputRef,
  handleInputChange,
}: Props) {
  return (
    <div className="flex items-center justify-center w-full">
      <form className="relative flex items-center justify-center w-full">
        <div ref={inputRef} className="relative flex-1 max-w-xl">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"  />
          <Input
            type="search"
            placeholder="What kind of project are you looking for?"
            className="pl-10 py-2 w-full bg-muted/50 bg-brand-black-100 text-brand-lightblue-100 rounded-full text-base"
            onChange={handleInputChange}
            value={query}
            
          />
          {suggestions.length > 0 && (
            <div className="absolute z-10 bg-brand-black-100 max-h-60 w-full overflow-y-auto shadow-lg rounded-md mt-1 border border-gray-200">
              {suggestions.map((suggestion) => (
                <PlaylistItem
                  key={suggestion.id}
                  project={suggestion}
                  events={{
                    onClick: (name: string) => {
                      setQuery(name);
                      setSuggestions([]);
                    },
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
