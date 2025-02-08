import { Cover } from "@/components/cover";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/lib/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Accommodation | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <Shell>
      <Cover title="Accommodation" />
      <div className="space-y-6">
        <p>
          We have partnered with several hotels near IIT Madras to provide
          comfortable accommodation options for conference attendees.
        </p>
        <h2 className="text-2xl font-semibold">Recommended Hotels</h2>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>Hotel Grand Chennai</strong>
            <p>Distance from venue: 2 km</p>
            <p>Rate: ₹5000 per night</p>
          </li>
          <li>
            <strong>Radisson Blu Hotel</strong>
            <p>Distance from venue: 3 km</p>
            <p>Rate: ₹6000 per night</p>
          </li>
          <li>
            <strong>The Park Chennai</strong>
            <p>Distance from venue: 4 km</p>
            <p>Rate: ₹5500 per night</p>
          </li>
        </ul>
        <p>
          To book accommodation at these special rates, please use the booking
          code ISEA2025 when making your reservation.
        </p>
      </div>
    </Shell>
  );
}
