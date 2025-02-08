import { Cover } from "@/components/cover";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/lib/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Conference | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <Shell>
      <Cover title="Conference Schedule" />
      <div className="space-y-6">
        <p>
          The detailed conference schedule will be published closer to the event
          date. Here's a tentative overview:
        </p>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Morning Session</th>
              <th className="border border-gray-300 p-2">Afternoon Session</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">August 10, 2025</td>
              <td className="border border-gray-300 p-2">
                Opening Ceremony & Keynote
              </td>
              <td className="border border-gray-300 p-2">
                Paper Presentations
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">August 11, 2025</td>
              <td className="border border-gray-300 p-2">
                Paper Presentations
              </td>
              <td className="border border-gray-300 p-2">Panel Discussion</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">August 12, 2025</td>
              <td className="border border-gray-300 p-2">Workshops</td>
              <td className="border border-gray-300 p-2">Poster Sessions</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">August 13, 2025</td>
              <td className="border border-gray-300 p-2">
                Industry Presentations
              </td>
              <td className="border border-gray-300 p-2">
                Paper Presentations
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">August 14, 2025</td>
              <td className="border border-gray-300 p-2">Closing Keynote</td>
              <td className="border border-gray-300 p-2">
                Awards & Closing Ceremony
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Shell>
  );
}
