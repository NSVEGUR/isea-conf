import { Shell } from "@/components/shell";
import { CommitteeMembers } from "./_components/committee-members";
import { siteConfig } from "@/lib/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Committee | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <Shell>
      <CommitteeMembers />
    </Shell>
  );
}
