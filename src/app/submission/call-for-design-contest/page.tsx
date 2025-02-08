import { Cover } from "@/components/cover";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/lib/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Call for Design Contest | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <Shell>
      <Cover title="Call for Design Contest" />
      <div className="space-y-6">
        <p>
          The ISEA Conference on Security and Privacy 2025 is excited to
          announce a Security Design Contest. This contest aims to encourage
          innovative solutions to real-world security and privacy challenges.
        </p>
        <h2 className="text-2xl font-semibold">Contest Theme</h2>
        <p>"Securing the Internet of Things (IoT) in Smart Cities"</p>
        <h2 className="text-2xl font-semibold">Submission Guidelines</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Proposals should address security and privacy issues in IoT devices
            and systems for smart cities
          </li>
          <li>
            Submissions should include a detailed design document (max 10 pages)
            and a short video presentation (5 minutes)
          </li>
          <li>Teams of up to 4 members are allowed</li>
        </ul>
        <h2 className="text-2xl font-semibold">Evaluation Criteria</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Innovation and creativity</li>
          <li>Technical feasibility</li>
          <li>Potential impact on security and privacy</li>
          <li>Clarity of presentation</li>
        </ul>
        <h2 className="text-2xl font-semibold">Important Dates</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Submission deadline: May 1, 2025</li>
          <li>Finalist notification: June 1, 2025</li>
          <li>Final presentations at ISEA 2025: August 12, 2025</li>
        </ul>
        <p>
          Prizes will be awarded to the top three designs. For more information,
          please contact designcontest@isea2025.org
        </p>
      </div>
    </Shell>
  );
}
