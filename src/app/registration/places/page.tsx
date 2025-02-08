import { Cover } from "@/components/cover";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/lib/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Places | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <Shell>
      <Cover title="Places to Visit in Chennai" />
      <div className="space-y-6">
        <p>
          Chennai, the capital of Tamil Nadu, offers a rich blend of history,
          culture, and modern attractions. Here are some must-visit places
          during your stay:
        </p>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>Marina Beach</strong>
            <p>
              One of the longest urban beaches in the world, perfect for an
              evening stroll.
            </p>
          </li>
          <li>
            <strong>Kapaleeshwarar Temple</strong>
            <p>
              A beautiful 7th-century Dravidian-style temple dedicated to Lord
              Shiva.
            </p>
          </li>
          <li>
            <strong>Fort St. George</strong>
            <p>
              The first English fortress in India, now housing the Tamil Nadu
              Legislative Assembly.
            </p>
          </li>
          <li>
            <strong>Government Museum</strong>
            <p>
              One of the oldest museums in India, featuring a diverse collection
              of artifacts.
            </p>
          </li>
          <li>
            <strong>San Thome Basilica</strong>
            <p>
              A 16th-century Roman Catholic church built over the tomb of St.
              Thomas the Apostle.
            </p>
          </li>
        </ul>
        <p>
          We recommend extending your stay to explore these attractions and
          experience the vibrant culture of Chennai.
        </p>
      </div>
    </Shell>
  );
}
