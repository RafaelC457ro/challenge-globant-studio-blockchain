import { useDropzone } from "react-dropzone";
import { useParsedFiles } from "../../hooks/useParsedFiles/useParsedFiles";

export function Dropzone() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: true,
    accept: {
      "image/png": [],
      "text/csv": [],
    },
  });

  const { isLoading, records } = useParsedFiles(acceptedFiles);

  const containsErrors = records?.filter((r) => !!r.error);

  const successRecords = records?.filter((r) => !r.error);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div
          {...getRootProps({
            className: "border-2 border-dashed border-gray-500 h-96",
          })}
        >
          <input
            {...getInputProps({
              className: "hidden",
            })}
          />
          <div className="text-center m-auto my-10 font-sans text-gray-600 text-xl">
            <h4>Drop files anywhere to upload</h4>
          </div>
        </div>
      )}

      {successRecords.length > 0 ? (
        <div className="my-5">
          <h4 className="text-bold text-lg font-bold">Success!</h4>
          <p className="text-green-600">
            {successRecords.length} files uploaded successfully.
          </p>
        </div>
      ) : null}

      {containsErrors.length ? (
        <div className="my-5">
          <div>
            <h4 className="text-bold text-lg font-bold">
              The following files contains errors:
            </h4>
          </div>
          <div>
            {containsErrors.map((record) => {
              return (
                <div key={record.name} className="text-red-500">
                  {record.name} - {record?.error}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
