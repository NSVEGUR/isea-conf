import { Cover } from "@/components/cover";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/lib/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Call for Tutorials | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <Shell>
      <Cover title="Call for Tutorials" />
      <div className="space-y-6">
        <p>
          We invite proposals for tutorials to be held in conjunction with the
          ISEA Conference on Security and Privacy 2025. Tutorials should provide
          a comprehensive introduction to established or emerging research
          topics in security and privacy.
        </p>
        <h2 className="text-2xl font-semibold">Proposal Guidelines</h2>
        <p>Tutorial proposals should include:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Title and abstract (200 words)</li>
          <li>Outline of the tutorial content</li>
          <li>Duration (half-day or full-day)</li>
          <li>Target audience and prerequisites</li>
          <li>Brief biography of the presenter(s)</li>
        </ul>
        <h2 className="text-2xl font-semibold">Important Dates</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Tutorial proposal submission: February 1, 2025</li>
          <li>Notification of acceptance: March 1, 2025</li>
          <li>Final tutorial materials due: July 1, 2025</li>
        </ul>
        <p>Please submit your tutorial proposals to tutorials@isea2025.org</p>
      </div>
    </Shell>
  );
}
