import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Navigation() {
  return (
    <div className="flex-1 items-center gap-4 w-full">
      <div className="flex items-center space-x-1">
        <button className="p-2 rounded-full hover:bg-gray-800">
          <ChevronLeft className="h-5 w-5 text-gray-300" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-800">
          <ChevronRight className="h-5 w-5 text-gray-300" />
        </button>
      </div>
    </div>
  );
}