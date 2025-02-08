import { Cover } from "@/components/cover";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/lib/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Travel | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <Shell>
      <Cover title="Travel and Visa Information" />
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Travel to Chennai</h2>
        <p>
          Chennai is well-connected by air, rail, and road. The nearest airport
          is Chennai International Airport (MAA), which is about 10 km from IIT
          Madras.
        </p>
        <h2 className="text-2xl font-semibold">Visa Information</h2>
        <p>
          Most international visitors will need a visa to enter India. Please
          check the official Indian government visa website for the most
          up-to-date information and to apply for your visa well in advance of
          the conference.
        </p>
        <h3 className="text-xl font-semibold">Visa Application Process:</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Check your eligibility for an e-Visa or regular visa</li>
          <li>
            Gather required documents (passport, photos, conference invitation
            letter)
          </li>
          <li>Apply online or through a visa application center</li>
          <li>Pay the visa fee</li>
          <li>Attend a visa interview if required</li>
          <li>Wait for visa processing (can take several weeks)</li>
        </ol>
        <p>
          If you need an invitation letter for your visa application, please
          contact the conference organizers after completing your registration.
        </p>
      </div>
    </Shell>
  );
}
