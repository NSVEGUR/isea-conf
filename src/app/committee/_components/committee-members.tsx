"use client";

import { useState } from "react";
import { committees } from "../_lib/data";
import { CommitteeMemberCard } from "./committee-member-card";
import { Button } from "@/components/ui/button";

export function CommitteeMembers() {
  const [selectedCommittee, setSelectedCommittee] = useState(committees[0]);

  return (
    <div className="min-h-screen py-12">
      <div className="container px-4 mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Committee Members
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Meet the dedicated team behind ISEA Conference 2025
            </p>
          </div>

          {/* Committee Selection */}
          <div className="flex flex-wrap justify-center gap-2">
            {committees.map((committee) => (
              <Button
                key={committee.id}
                variant={
                  selectedCommittee.id === committee.id ? "default" : "outline"
                }
                onClick={() => setSelectedCommittee(committee)}
                className="min-w-[150px]"
              >
                {committee.name}
              </Button>
            ))}
          </div>

          {/* Selected Committee Display */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-center">
              {selectedCommittee.name}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {selectedCommittee.members.map((member, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <CommitteeMemberCard key={index} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
