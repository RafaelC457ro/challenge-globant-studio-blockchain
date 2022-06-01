import { useEffect, useState } from "react";
import { getRecords } from "../../utils/storage";
import { Record } from "../../types";

export function Images() {
  const [images, setImages] = useState<Record[]>([]);

  useEffect(() => {
    const records = getRecords();
    const images = records.filter((r: Record) => r.type === "image");
    setImages(images);
  }, []);

  return (
    <div className="container mx-auto py-10 flex flex-col">
      <h2 className="text-3xl font-bold text-emerald-600">
        Welcome to our images page
      </h2>
      <p className="text-xl text-gray-600 font-sans">
        This page you can see the images you have.
      </p>

      <div className="flex flex-col my-20">
        <div className="grid grid-cols-6 gap-6">
          {images.map((image) => (
            <img
              className="object-cover w-full h-full"
              key={image.name}
              src={image.data}
              alt={image.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
