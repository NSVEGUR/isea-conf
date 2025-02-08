import { Cover } from "@/components/cover";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/lib/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Keynote Speakers | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <Shell>
      <Cover title="Keynote Speakers" />
      <div className="space-y-6">
        <p>
          We are honored to present the following distinguished keynote speakers
          for ISEA Conference on Security and Privacy 2025:
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Dr. Jane Smith"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-center">
              Dr. Jane Smith
            </h2>
            <p className="text-center text-gray-600">
              Professor of Cybersecurity, Stanford University
            </p>
            <p className="mt-4 text-center">
              Topic: "The Future of Quantum-Resistant Cryptography"
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Dr. John Doe"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-center">Dr. John Doe</h2>
            <p className="text-center text-gray-600">
              Chief Security Officer, Tech Innovations Inc.
            </p>
            <p className="mt-4 text-center">
              Topic: "AI-Driven Security: Opportunities and Challenges"
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Prof. Maria Garcia"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-center">
              Prof. Maria Garcia
            </h2>
            <p className="text-center text-gray-600">
              Director, European Institute for Privacy Research
            </p>
            <p className="mt-4 text-center">
              Topic: "Privacy in the Age of Ubiquitous Computing"
            </p>
          </div>
        </div>
        <p className="mt-8">
          Stay tuned for more information about our distinguished speakers and
          their presentations.
        </p>
      </div>
    </Shell>
  );
}
