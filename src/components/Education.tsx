import { ChevronRightIcon } from "lucide-react";
import React from "react";

interface EducationProps {
  name: string;
  qualification: string;
  startDate: string;
  endDate: string;
  image: string;
}

function Education({
  name,
  qualification,
  startDate,
  endDate,
  image,
}: EducationProps) {
  return (
    <div>
      <div className="flex justify-between items-start w-full mt-2 hover:cursor-pointer">
        <div className="flex items-start gap-4 w-full">
          <img
            src={image}
            alt="Company Logo"
            className="h-10 w-10 rounded-full shadow-md"
          />
          <div className="flex flex-col">
            <div className="flex items-center font-medium text-[15px]">
              {name}
            </div>
            <div className="text-[13px] text-gray-500">{qualification}</div>
          </div>
        </div>

        {/* Right section: Dates */}
        <div className="md:text-sm text-xs pt-1 text-gray-500 whitespace-nowrap">
          {startDate} – {endDate}
        </div>
      </div>
    </div>
  );
}

export default Education;
