import { useEffect } from "react";
import { useDropzone, FileWithPath } from "react-dropzone";

interface Record {
  type: "image" | "sheet";
  name: string;
  total?: string;
  data: string;
}

function toBase64(file: FileWithPath): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}

async function processFiles(
  files: FileWithPath[]
): Promise<(Record | undefined)[]> {
  const data = files.map(async (file): Promise<Record | undefined> => {
    if (file.type === "image/png") {
      const b: string = await toBase64(file);

      return {
        type: "image",
        name: file.name,
        data: b,
      };
    }
    if (file.type === "text/csv") {
      const b: string = await toBase64(file);
      return {
        type: "sheet",
        name: file.name,
        data: b,
      };
    }
  });

  return Promise.all(data);
}

export function Dropzone() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: true,
    accept: {
      "image/png": [],
      "text/csv": [],
    },
  });

  useEffect(() => {
    processFiles(acceptedFiles as FileWithPath[]);
  }, [acceptedFiles]);

  return (
    <div
      {...getRootProps({
        className: "border-2 border-dashed border-gray-500 h-96",
      })}
    >
      <input {...getInputProps()} />
      <div className="text-center m-auto my-10 font-sans text-gray-600 text-xl">
        <h4>Drop files anywhere to upload</h4>
      </div>
    </div>
  );
}
