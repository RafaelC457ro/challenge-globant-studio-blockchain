import { useEffect, useState } from "react";
import { getRecords } from "../../utils/storage";
import { Record } from "../../types";

export function Sheets() {
  const [sheets, setSheets] = useState<Record[]>([]);

  useEffect(() => {
    const records = getRecords();
    const images = records.filter((r: Record) => r.type === "sheet");
    setSheets(images);
  }, []);

  return (
    <div className="container mx-auto py-10 flex flex-col">
      <h2 className="text-3xl font-bold text-emerald-600">
        Welcome to our sheets page
      </h2>
      <p className="text-xl text-gray-600 font-sans">
        This page you cam see the total amout of sheets you have.
      </p>

      <div className="flex flex-col my-20">
        <table>
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {sheets.map((sheet) => (
              <tr key={sheet.name}>
                <td className="px-4 py-2 text-left">{sheet.name}</td>
                <td className="px-4 py-2 text-left">{sheet.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
