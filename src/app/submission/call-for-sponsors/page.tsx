import { Cover } from "@/components/cover";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/lib/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Call for Sponsors | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <Shell>
      <Cover title="Call for Sponsors" />
      <div className="space-y-6">
        <p>
          The ISEA Conference on Security and Privacy 2025 offers excellent
          opportunities for companies and organizations to showcase their
          products, services, and research to a global audience of security and
          privacy professionals.
        </p>
        <h2 className="text-2xl font-semibold">Sponsorship Levels</h2>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>Platinum Sponsor (₹500,000)</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Prime exhibition space</li>
              <li>4 complimentary conference registrations</li>
              <li>Logo on conference website and materials</li>
              <li>Full-page ad in the conference program</li>
            </ul>
          </li>
          <li>
            <strong>Gold Sponsor (₹300,000)</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Exhibition space</li>
              <li>2 complimentary conference registrations</li>
              <li>Logo on conference website and materials</li>
              <li>Half-page ad in the conference program</li>
            </ul>
          </li>
          <li>
            <strong>Silver Sponsor (₹150,000)</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Exhibition space</li>
              <li>1 complimentary conference registration</li>
              <li>Logo on conference website</li>
            </ul>
          </li>
        </ul>
        <p>
          For more information or to become a sponsor, please contact our
          sponsorship chair at sponsors@isea2025.org
        </p>
      </div>
    </Shell>
  );
}
