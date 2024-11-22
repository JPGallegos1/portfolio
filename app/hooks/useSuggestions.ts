import { Project } from "database.types";
import { useEffect, useRef, useState } from "react";

export default function useSuggestions(suggest: Project[]) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Project[]>([]);
  const inputRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOrFocusOutside = (event: Event) => {
      const target = event.target as Node;

      if (inputRef.current && !inputRef.current.contains(target)) {
        setSuggestions([]); 
      }
    };

    document.addEventListener("mousedown", handleClickOrFocusOutside);
    document.addEventListener("focusin", handleClickOrFocusOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOrFocusOutside);
      document.removeEventListener("focusin", handleClickOrFocusOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setSuggestions(
      suggest.filter((project) =>
        project.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return {
    query,
    setQuery,
    suggestions,
    setSuggestions,
    inputRef,
    handleInputChange
  };
}
