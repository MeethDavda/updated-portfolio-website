"use client";
import exp from "constants";
import { motion } from "framer-motion";
import { ChevronRightIcon, ChevronsLeftRightIcon } from "lucide-react";
import React, { useState } from "react";

interface WorkExperienceProps {
  company: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  description: Array<string>;
  image: string;
}

function WorkExperience({
  company,
  jobTitle,
  startDate,
  endDate,
  description,
  image,
}: WorkExperienceProps) {
  const [expanded, setExpanded] = useState(false);

  function handleExpansion() {
    setExpanded(!expanded);
  }
  const handleDescriptionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="md:w-[75%] mr-5">
      <div>
        <div
          className="flex justify-between items-start w-full mt-2 hover:cursor-pointer"
          onClick={handleExpansion}
        >
          <div className="flex items-start gap-4 w-full">
            <img
              src={image}
              alt="Company Logo"
              className="h-10 w-10 rounded-full shadow-md"
            />
            <div className="flex flex-col">
              <div className="flex items-center font-semibold">
                {company}
                <span className="text-lg">
                  <ChevronRightIcon
                    className={`h-4 ${
                      expanded ? "rotate-90" : "rotoate-0"
                    } transition-all ease-in-out duration-300`}
                  />
                </span>
              </div>
              <div className="text-sm text-black">{jobTitle}</div>
            </div>
          </div>

          {/* Right section: Dates */}
          <div className="md:text-sm text-xs pt-1 text-gray-500 whitespace-nowrap">
            {startDate} – {endDate}
          </div>
        </div>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: expanded ? 1 : 0,
              height: expanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-2 text-xs sm:text-sm mb-4"
            onClick={handleDescriptionClick}
          >
            <div className="mt-1 ml-5">
              <ul className="list-disc">
                {description.map((point, index) => (
                  <li className="text-sm font-light" key={index}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default WorkExperience;
