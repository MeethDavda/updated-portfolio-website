"use client";
import { ChevronRightIcon, ChevronsLeftRightIcon } from "lucide-react";
import React, { useState } from "react";

function WorkExperience() {
  const [expanded, setExpanded] = useState(false);

  function handleExpansion() {
    setExpanded(!expanded);
  }

  return (
    <div className="md:w-[75%] ">
      <div
        className="flex justify-between items-start w-full mt-2 hover:cursor-pointer"
        onClick={handleExpansion}
      >
        <div className="flex items-start gap-4 w-full">
          <img
            src="https://avatars.githubusercontent.com/u/55022689?s=200&v=4"
            alt="Company Logo"
            className="h-10 w-10 rounded-full shadow-md"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1 font-semibold">
              Appwrite{" "}
              <span className="text-lg">
                <ChevronRightIcon
                  className={`h-4 ${
                    expanded ? "rotate-90" : "rotoate-0"
                  } transition-all ease-in-out duration-300`}
                />
              </span>
            </div>
            <div className="text-sm text-black">Engineering Intern</div>
          </div>
        </div>

        {/* Right section: Dates */}
        <div className="md:text-sm text-xs pt-1 text-gray-500 whitespace-nowrap">
          December 2024 – Present
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
