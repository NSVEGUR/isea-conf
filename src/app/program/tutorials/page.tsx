import { Cover } from "@/components/cover";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/lib/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Tutorials | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <Shell>
      <Cover title="Tutorial Schedule" />
      <div className="space-y-6">
        <p>
          The tutorial schedule will be announced closer to the conference date.
          Stay tuned for exciting learning opportunities!
        </p>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Time</th>
              <th className="border border-gray-300 p-2">Tutorial</th>
              <th className="border border-gray-300 p-2">Presenter</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">August 9, 2025</td>
              <td className="border border-gray-300 p-2">9:00 AM - 12:00 PM</td>
              <td className="border border-gray-300 p-2">
                Introduction to Quantum Cryptography
              </td>
              <td className="border border-gray-300 p-2">Dr. Jane Doe</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">August 9, 2025</td>
              <td className="border border-gray-300 p-2">2:00 PM - 5:00 PM</td>
              <td className="border border-gray-300 p-2">
                Advanced Network Security Techniques
              </td>
              <td className="border border-gray-300 p-2">Prof. John Smith</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Shell>
  );
}
