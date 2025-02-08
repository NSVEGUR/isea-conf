import { Cover } from "@/components/cover";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/lib/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Registration | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <Shell>
      <Cover title="Registration" />
      <div className="space-y-6">
        <p>
          Registration for the ISEA Conference on Security and Privacy 2025 will
          open soon. Please check back for updates.
        </p>
        <h2 className="text-2xl font-semibold">Registration Fees</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Category</th>
              <th className="border border-gray-300 p-2">
                Early Bird (Until May 31, 2025)
              </th>
              <th className="border border-gray-300 p-2">
                Regular (After May 31, 2025)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">IEEE Member</td>
              <td className="border border-gray-300 p-2">$500</td>
              <td className="border border-gray-300 p-2">$600</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Non-Member</td>
              <td className="border border-gray-300 p-2">$600</td>
              <td className="border border-gray-300 p-2">$700</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Student</td>
              <td className="border border-gray-300 p-2">$300</td>
              <td className="border border-gray-300 p-2">$350</td>
            </tr>
          </tbody>
        </table>
        <p>
          Registration includes access to all conference sessions, workshops,
          and social events.
        </p>
      </div>
    </Shell>
  );
}
