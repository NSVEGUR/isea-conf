import Image from "next/image";
import type { CommitteeMember } from "../_lib/data";

interface CommitteeMemberCardProps {
  member: CommitteeMember;
}

export function CommitteeMemberCard({ member }: CommitteeMemberCardProps) {
  return (
    <div className="flex flex-col items-center p-6 space-y-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="relative w-32 h-32 overflow-hidden rounded-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-sm text-primary">{member.role}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {member.affiliation}
        </p>
      </div>
    </div>
  );
}
