import { type Project } from "database.types";
import { Card, CardContent } from "./ui/card";
import useSupabaseBucket from "~/hooks/useSupabaseBucket";
import DownloadInput from "./form/download-input";
import Playlist from "./shared/playlist";

export default function Overview({
  initialProjects,
}: {
  initialProjects: Project[];
}) {

  const { fileToDownload } = useSupabaseBucket('resume');

  return (
    <div className="text-white p-6 aquamarine-gradient">
      <div className="grid lg:grid-cols-[1fr,400px] gap-6">

        <Playlist initialProjects={initialProjects} />

        {/* Right Column */}
        <div className="space-y-6">
          <DownloadInput
            fileToDownload={fileToDownload}
            typography={{
              typographyTitle: "Download Resume",
              typographyType: "h2",
              label: "Resume - Juan Pablo Gallegos.pdf",
              description: "Updated on 2024-11",
            }}
          />

          {/* Latest Experience Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Latest Experience</h2>
            <Card className="bg-white/5 hover:bg-white/10 transition-colors border-none overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src="claraco-3.png"
                    alt="Latest work"
                    width={800}
                    height={400}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 p-4">
                    <h3 className="text-lg font-bold">Senior Developer</h3>
                    <p className="text-sm text-white/80">
                      Tech Company • 2023-Present
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
