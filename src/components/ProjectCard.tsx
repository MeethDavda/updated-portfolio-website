import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Icons } from "./Icons";
import Link from "next/link";
import { div } from "motion/react-client";

interface ProjectCardProps {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
  tags: Array<String>;
}

function ProjectCard({
  name,
  startDate,
  endDate,
  description,
  image,
  tags,
}: ProjectCardProps) {
  return (
    <Card className="w-full flex flex-col hover:shadow-xl transition-all duration-300 ease-in-out">
      <div className="bg-slate-300 h-[10em] w-full"></div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <div className="text-[12px] font-light">
          {startDate} - {endDate}
        </div>
        <CardDescription className="text-[14px] ">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {tags && tags.length > 0 && (
          <div className="flex flex-row gap-1">
            {tags?.map((tag, index) => (
              <Badge
                variant="secondary"
                className="text-[10px] py-0 px-1"
                key={index}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-row justify-end">
        <Link href="https://pharmabolt.com/" target="_blank">
          <Badge className="text-[10px]">
            <Icons.globe className="size-3 mr-1" />
            Website
          </Badge>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
