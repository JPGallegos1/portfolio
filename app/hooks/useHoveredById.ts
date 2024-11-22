import { useState } from "react";

export default function useHoveredById() {
  const [hoveredProjectById, setHoveredProjectById] = useState<number | null>(
    null
  );

  const handleMouseEnter = (id: number) => {
    setHoveredProjectById(id);
  };

  const handleMouseLeave = () => {
    setHoveredProjectById(null);
  };

  return { hoveredProjectById, handleMouseEnter, handleMouseLeave };
}