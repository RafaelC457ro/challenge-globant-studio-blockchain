import { useEffect, useState } from "react";
import { FileWithPath } from "react-dropzone";
import Papa from "papaparse";
import { Record as IRecord } from "../../types";
import { addRecord } from "../../utils/storage";

function toBase64(file: FileWithPath): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}

function parseSheet(file: File): Promise<IRecord> {
  return new Promise((resolve) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const demiliter = results.meta.delimiter;
        if (demiliter !== ",") {
          resolve({
            type: "sheet",
            name: file.name,
            error: "This file contains a different delimiter than comma(,).",
          });
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const total = results.data.reduce((acc: number, cur: any): number => {
          if (cur && cur?.Total) {
            return acc + Number(cur?.Total);
          }
          return acc;
        }, 0);

        resolve({
          type: "sheet",
          name: file.name,
          total: total,
        });
      },
    });
  });
}

export async function processFiles(files: FileWithPath[]): Promise<IRecord[]> {
  const data = files
    .map(async (file): Promise<IRecord | undefined> => {
      if (file.type === "image/png") {
        const b: string = await toBase64(file);

        return {
          type: "image",
          name: file.name,
          data: b,
        };
      }
      if (file.type === "text/csv") {
        return await parseSheet(file);
      }
    })
    .filter(async (d) => (await d) !== undefined) as unknown as IRecord[];

  return Promise.all(data);
}

export interface useParsedFilesReturn {
  isLoading: boolean;
  records: IRecord[];
}

export function useParsedFiles(files: FileWithPath[]): useParsedFilesReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IRecord[]>([]);

  useEffect(() => {
    setIsLoading(true);
    processFiles(files).then((d) => {
      for (const record of d) {
        if (!record?.error) {
          addRecord(record);
        }
      }
      setData(d);
      setIsLoading(false);
    });
  }, [files]);

  return { isLoading, records: data };
}
