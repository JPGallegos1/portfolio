import { Link } from "@remix-run/react";
import { Card, CardContent } from "../ui/card";
import { Download } from "lucide-react";
import Typography from "../ui/typography";

type Typography = {
  typographyTitle: string;
  typographyType: string;
  label: string;
  description?: string;
};

export default function DownloadInput({
  fileToDownload,
  typography,
}: {
  fileToDownload: string | null;
  typography: Typography;
}) {
  const { typographyTitle, typographyType, label, description } = typography;
  return (
    <div>
      <Typography type={typographyType} text={typographyTitle} />
      <Link
        to={fileToDownload!}
        reloadDocument
        download="Resume - Juan Pablo Gallegos.pdf"
        className="block"
      >
        <Card className="bg-white/5 hover:bg-white/10 transition-colors border-none">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-white/20">
              <Download className="w-6 h-6 " />
            </div>
            <div>
              <h3 className="font-medium text-white/70">{label}</h3>
              {description ? (
                <p className="text-sm text-white/60">{description}</p>
              ) : null}
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
