import { Cover } from "@/components/cover";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/lib/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Call for Camera Ready | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <Shell>
      <Cover title="Camera Ready Submission" />
      <div className="space-y-6">
        <p>
          Congratulations on your accepted paper! Please follow these guidelines
          for submitting your camera-ready version:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Use the provided LaTeX template for formatting</li>
          <li>
            Ensure your paper does not exceed the page limit (10 pages for full
            papers, 6 pages for short papers)
          </li>
          <li>Include all necessary figures, tables, and references</li>
          <li>Proofread carefully for any typos or grammatical errors</li>
          <li>
            Submit your camera-ready paper through the conference submission
            system
          </li>
        </ol>
        <p>Deadline for camera-ready submission: June 15, 2025</p>
        <p>
          If you have any questions about the camera-ready submission process,
          please contact the program chairs at program-chairs@isea2025.org
        </p>
      </div>
    </Shell>
  );
}
