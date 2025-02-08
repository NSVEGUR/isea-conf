import { Cover } from "@/components/cover";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/lib/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Call for PhD Research Forum | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <Shell>
      <Cover title="PhD Research Forum" />
      <div className="space-y-6">
        <p>
          The ISEA Conference on Security and Privacy 2025 is hosting a PhD
          Research Forum to provide an opportunity for doctoral students to
          present their ongoing research and receive feedback from experts in
          the field.
        </p>
        <h2 className="text-2xl font-semibold">Eligibility</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Must be a current PhD student in security, privacy, or a related
            field
          </li>
          <li>Research should be in progress (not completed work)</li>
        </ul>
        <h2 className="text-2xl font-semibold">Submission Guidelines</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Extended abstract (2 pages) describing your research problem,
            approach, and current status
          </li>
          <li>Brief CV (1 page)</li>
          <li>Letter of recommendation from your PhD advisor</li>
        </ul>
        <h2 className="text-2xl font-semibold">Forum Format</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>5-minute lightning talks</li>
          <li>Poster session for in-depth discussions</li>
          <li>Feedback sessions with senior researchers</li>
        </ul>
        <h2 className="text-2xl font-semibold">Important Dates</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Submission deadline: April 15, 2025</li>
          <li>Notification of acceptance: May 15, 2025</li>
          <li>PhD Research Forum at ISEA 2025: August 11, 2025</li>
        </ul>
        <p>
          For more information or to submit your application, please visit the
          PhD Research Forum submission portal (link to be provided).
        </p>
      </div>
    </Shell>
  );
}
