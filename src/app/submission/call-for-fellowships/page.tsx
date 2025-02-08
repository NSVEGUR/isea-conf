import { Cover } from "@/components/cover";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/lib/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Call for Fellowships | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <Shell>
      <Cover title="Call for Fellowships" />
      <div className="space-y-6">
        <p>
          The ISEA Conference on Security and Privacy 2025 is pleased to
          announce a limited number of fellowships to support student attendance
          at the conference.
        </p>
        <h2 className="text-2xl font-semibold">Eligibility</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Must be a full-time student at the time of the conference</li>
          <li>
            Must have a paper accepted at the main conference or associated
            workshops
          </li>
          <li>
            Preference given to students who have not previously received an
            ISEA fellowship
          </li>
        </ul>
        <h2 className="text-2xl font-semibold">Fellowship Coverage</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Conference registration fee waiver</li>
          <li>Up to ₹50,000 for travel and accommodation expenses</li>
        </ul>
        <h2 className="text-2xl font-semibold">Application Process</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Submit your paper to the main conference or workshops</li>
          <li>
            If accepted, apply for the fellowship by sending the following to
            fellowships@isea2025.org:
            <ul className="list-disc list-inside ml-4">
              <li>CV</li>
              <li>Brief statement of research interests</li>
              <li>Letter of recommendation from your advisor</li>
            </ul>
          </li>
        </ol>
        <p>Application deadline: June 1, 2025</p>
        <p>Notification of fellowship awards: June 15, 2025</p>
      </div>
    </Shell>
  );
}
