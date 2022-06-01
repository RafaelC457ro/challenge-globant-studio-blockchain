import { Dropzone } from "../../components";

export function Home() {
  return (
    <div className="container mx-auto py-10 flex flex-col">
      <h2 className="text-3xl font-bold text-emerald-600">
        Welcome to our upload page
      </h2>
      <p className="text-xl text-gray-600 font-sans">
        You can upload PNG or CSV files.
      </p>
      <div className="flex flex-col my-20">
        <Dropzone />
      </div>
    </div>
  );
}
