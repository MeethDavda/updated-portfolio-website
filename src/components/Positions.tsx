import { li } from "motion/react-client";
import React from "react";
import { Badge } from "./ui/badge";
import Link from "next/link";

interface PositionProps {
  position: string;
  organisation: string;
  startDate: string;
  endDate: string;
  image: string;
  description: string;
  tags: Array<any>;
}

function Positions({
  position,
  organisation,
  startDate,
  endDate,
  image,
  description,
  tags,
}: PositionProps) {
  return (
    <li className="pl-10 pb-2 flex flex-col relative mt-5 gap-1">
      <div>
        {" "}
        <img
          src={image}
          alt="Company Logo"
          className="h-12 w-12 rounded-full  absolute -left-6 -top-5"
        />
      </div>
      <div className="text-[12px] font-light">
        {startDate} - {endDate}
      </div>
      <div className="text-lg font-semibold">{position}</div>
      <div className="text-sm font-bold text-gray-500">{organisation}</div>
      <div className="text-sm text-gray-500 font-normal">{description}</div>
      <div className="mt-1">
        {tags.map((tag) => (
          <Link href={tag.link} target="_blank" key={tag.website}>
            <Badge variant="outline">{tag.website}</Badge>
          </Link>
        ))}
      </div>
    </li>
  );
}

export default Positions;
