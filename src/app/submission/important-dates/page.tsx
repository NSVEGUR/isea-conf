import { Cover } from "@/components/cover";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/lib/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Call for Important Dates | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <Shell>
      <Cover title="Important Dates" />
      <div className="space-y-6">
        <p>
          Please note the following key dates for the ISEA Conference on
          Security and Privacy 2025:
        </p>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Event</th>
              <th className="border border-gray-300 p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">
                Abstract submission deadline
              </td>
              <td className="border border-gray-300 p-2">March 1, 2025</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                Full paper submission deadline
              </td>
              <td className="border border-gray-300 p-2">March 15, 2025</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                Tutorial proposal submission
              </td>
              <td className="border border-gray-300 p-2">February 1, 2025</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                Notification of acceptance
              </td>
              <td className="border border-gray-300 p-2">May 1, 2025</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                Camera-ready submission deadline
              </td>
              <td className="border border-gray-300 p-2">June 15, 2025</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                Early bird registration deadline
              </td>
              <td className="border border-gray-300 p-2">May 31, 2025</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Conference dates</td>
              <td className="border border-gray-300 p-2">August 10-14, 2025</td>
            </tr>
          </tbody>
        </table>
        <p>
          All deadlines are at 23:59 AoE (Anywhere on Earth) time on the date
          mentioned.
        </p>
        <p>
          Please note that these dates are subject to change. Check this page
          regularly for any updates.
        </p>
      </div>
    </Shell>
  );
}
