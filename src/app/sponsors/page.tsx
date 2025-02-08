import { Cover } from "@/components/cover";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/lib/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Sponsors | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <Shell>
      <Cover title="Sponsors" />
      <div className="space-y-6">
        <p>
          We are grateful to the following organizations for their generous
          support of the ISEA Conference on Security and Privacy 2025:
        </p>
        <h2 className="text-2xl font-semibold">Platinum Sponsors</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg">
            <img
              src="/placeholder.svg?height=100&width=200"
              alt="Sponsor 1"
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg">
            <img
              src="/placeholder.svg?height=100&width=200"
              alt="Sponsor 2"
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <h2 className="text-2xl font-semibold">Gold Sponsors</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg">
            <img
              src="/placeholder.svg?height=80&width=160"
              alt="Sponsor 3"
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg">
            <img
              src="/placeholder.svg?height=80&width=160"
              alt="Sponsor 4"
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg">
            <img
              src="/placeholder.svg?height=80&width=160"
              alt="Sponsor 5"
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <h2 className="text-2xl font-semibold">Silver Sponsors</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg">
            <img
              src="/placeholder.svg?height=60&width=120"
              alt="Sponsor 6"
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg">
            <img
              src="/placeholder.svg?height=60&width=120"
              alt="Sponsor 7"
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg">
            <img
              src="/placeholder.svg?height=60&width=120"
              alt="Sponsor 8"
              className="max-w-full h-auto"
            />
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg">
            <img
              src="/placeholder.svg?height=60&width=120"
              alt="Sponsor 9"
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <p>
          Interested in becoming a sponsor? Please visit our{" "}
          <a
            href="/submission/call-for-sponsors"
            className="text-blue-600 hover:underline"
          >
            Call for Sponsors
          </a>{" "}
          page for more information.
        </p>
      </div>
    </Shell>
  );
}
