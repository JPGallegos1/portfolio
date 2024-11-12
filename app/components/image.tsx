// generate a Image component that fits the image to the container

import { AspectRatio } from "./ui/aspect-ratio";

type Props = {
  src: string;
  alt: string;
};

function randomColor() {
  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-purple-500",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function Image({ src, alt }: Props) {
  return (
    <div className="relative aspect-square mb-4">
      <div
        className={`absolute inset-0 bg-gradient-to-b ${randomColor()} to-transparent opacity-20 rounded-md`}
      />
      <AspectRatio ratio={16 / 9}>
        <img
          alt={alt}
          className="object-cover rounded-md w-full h-full"
          src={src}
        />
      </AspectRatio>
    </div>
  );
}
