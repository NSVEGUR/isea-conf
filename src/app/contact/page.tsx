import { Cover } from "@/components/cover";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/lib/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <Shell>
      <Cover title="Contact Us" />
      <div className="space-y-6">
        <p>
          If you have any questions or concerns regarding the ISEA Conference on
          Security and Privacy 2025, please don't hesitate to contact us:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">General Inquiries</h2>
            <p>Email: info@isea2025.org</p>
            <p>Phone: +91 44 2257 8000</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Registration Support</h2>
            <p>Email: registration@isea2025.org</p>
            <p>Phone: +91 44 2257 8001</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Technical Program</h2>
            <p>Email: program-chairs@isea2025.org</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Sponsorship Opportunities</h2>
            <p>Email: sponsors@isea2025.org</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Venue Address</h2>
          <p>Indian Institute of Technology Madras</p>
          <p>Sardar Patel Road, Adyar</p>
          <p>Chennai - 600036</p>
          <p>Tamil Nadu, India</p>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <a href="/" className="text-blue-600 hover:underline">
              Twitter
            </a>
            <a href="/" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
            <a href="/" className="text-blue-600 hover:underline">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </Shell>
  );
}
