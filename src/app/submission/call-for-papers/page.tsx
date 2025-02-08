import { Cover } from "@/components/cover";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/lib/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Call for Papers | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <Shell>
      <Cover title="Call for Papers" />
      <div className="space-y-6">
        <p>
          The ISEA Conference on Security and Privacy 2025 invites high-quality
          original research papers in all areas of security and privacy. Topics
          of interest include, but are not limited to:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Network and systems security</li>
          <li>Cryptography and its applications</li>
          <li>Privacy-enhancing technologies</li>
          <li>Web and mobile security</li>
          <li>Cloud and IoT security</li>
          <li>Machine learning for security and privacy</li>
          <li>Blockchain and distributed systems security</li>
          <li>Formal methods for security</li>
        </ul>
        <h2 className="text-2xl font-semibold">Important Dates</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Abstract submission: March 1, 2025</li>
          <li>Full paper submission: March 15, 2025</li>
          <li>Notification of acceptance: May 1, 2025</li>
          <li>Camera-ready submission: June 15, 2025</li>
        </ul>
        <p>
          All submissions must be original work not published or under review
          elsewhere. Papers should be submitted via the conference submission
          system (link to be provided).
        </p>
      </div>
    </Shell>
  );
}
