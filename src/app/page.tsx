import { Suspense } from "react";
import Directory from "@/components/Directory";
import { sites } from "@/data/sites";

export default function Home() {
  return (
    <div className="min-h-screen bg-ink">
      <Suspense
        fallback={
          <div className="mx-auto max-w-5xl px-6 py-16 text-muted sm:px-10">
            Loading directory…
          </div>
        }
      >
        <Directory sites={sites} />
      </Suspense>
    </div>
  );
}
