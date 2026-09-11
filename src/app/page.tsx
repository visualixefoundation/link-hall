import Directory from "@/components/Directory";
import { sites } from "@/data/sites";

export default function Home() {
  return (
    <div className="min-h-screen bg-ink">
      <Directory sites={sites} />
    </div>
  );
}
