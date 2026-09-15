import { Suspense } from "react";
import Directory from "@/components/Directory";
import { sites } from "@/data/sites";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas">
      <Suspense
        fallback={
          <div className="mx-auto max-w-6xl px-4 py-16 text-soft sm:px-6 lg:px-8">
            Loading directory…
          </div>
        }
      >
        <Directory sites={sites} />
      </Suspense>
    </div>
  );
}
