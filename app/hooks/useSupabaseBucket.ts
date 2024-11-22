import { useCallback, useEffect, useState } from "react";
import { downloadFile } from "~/lib/utils";

type FileToDownload = "resume" | "otherFile";

export const files: [FileToDownload, string][] = [
  ["resume", "cv.pdf"],
];

export default function useSupabaseBucket(file: FileToDownload) {
  const [fileToDownload, setFileToDownload] = useState<string | null>(null);

  const storageFactory = useCallback(() => {
    const storage = Object.fromEntries(
      files.map(([key, value]) => [key, value])
    );

    return storage[file] || null;
  }, [file]);

  useEffect(() => {
    downloadFile(storageFactory()!, setFileToDownload);
    return () => {
      if (fileToDownload) {
        URL.revokeObjectURL(fileToDownload);
      }
    };
  }, [storageFactory, fileToDownload]);

  return {
    fileToDownload,
  };
}
