import { DiPostgresql } from "react-icons/di";
import { FaDocker, FaNodeJs, FaPython } from "react-icons/fa";
import { SiAppwrite, SiKubernetes } from "react-icons/si";
import { Icons } from "../Icons";
import { startOptimizedAppearAnimation } from "motion/react";

export const work = [
  {
    company: "Boeing",
    jobTitle: "Software Engineer",
    startDate: "September 2024",
    endDate: "Present",
    description: [
      "Developed flight management tools aligned with safety and regulatory standards to improve aircraft performance.",
      "Automated requirement-based testing using Python, streamlining QA and reducing manual effort.",
    ],
    image: "/assets/Boeing.jpeg",
  },
  {
    company: "Rakuten",
    jobTitle: "Technical Intern",
    startDate: "February 2024",
    endDate: "August 2024",
    description: [
      "Built a NextJS dashboard with a Spring Boot backend to streamline annotation job creation, reducing setup time by 35%.",
      "Developed and shipped a production-ready Java SDK for programmatic access to the annotation platform under tight deadlines.",
    ],
    image: "/assets/Rakuten.png",
  },
  {
    company: "Boeing",
    jobTitle: "Software Intern",
    startDate: "June 2023",
    endDate: "August 2023",
    description: [
      "Improved ISS ground mechanics' efficiency by 30% through a dynamic AngularJS UI.",
      "Collaborated in an agile, cross-functional team to adapt to evolving user needs.",
    ],
    image: "/assets/Boeing.jpeg",
  },
];

export const education = [
  {
    name: "RV College of Engineering",
    qualification:
      "Bachelor's of Engineering in Computer Science and Engineering | 8.86 CGPA",
    startDate: "2020",
    endDate: "2024",
    image: "/assets/RVCE.png",
  },
  {
    name: "KLE Independent PU College",
    qualification: "Pre University | XII - 95%",
    startDate: "2018",
    endDate: "2020",
    image: "/assets/KLE.png",
  },
];

export const skills = [
  {
    name: "Next.js",
    icon: <Icons.nextjs className="size-3" />,
  },
  {
    name: "React",
    icon: <Icons.react className="size-3" />,
  },
  {
    name: "Typescript",
    icon: <Icons.typescript className="size-3" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="size-3" />,
  },
  {
    name: "Postgres",
    icon: <DiPostgresql className="size-3" />,
  },
  {
    name: "Docker",
    icon: <FaDocker className="size-3" />,
  },
];

export const projects = [
  {
    name: "PharmaBolt",
    startDate: "2024",
    endDate: "Present",
    image: "",
    tags: ["React Native", "Expo", "Typescript", "Mapbox"],
    description:
      "Get your medications delivered quickly and securely, right to your doorstep! Our delivery network ensures every order arrives on time and in perfect condition, so you never miss a moment of care.",
  },
  {
    name: "Project2",
    startDate: "2024",
    endDate: "Present",
    image: "",
    tags: ["React Native", "Expo", "Typescript", "Mapbox"],
    description:
      "Get your medications delivered quickly and securely, right to your doorstep! Our delivery network ensures every order arrives on time and in perfect condition, so you never miss a moment of care.",
  },
];

export const positions = [
  {
    position: "Project Lead",
    organisation: "System Consultant Information India (SCII)",
    startDate: "2023",
    endDate: "2024",
    image: "/assets/SCII.png",
    tags: [
      {
        website: "IEEE Website",
        link: "https://ieeexplore.ieee.org/document/10816830",
      },
    ],
    description:
      "Led a team of 5 in developing an innovative blockchain-based document storage system using NFTs, collaborating with the SCII Japan team and RVCE’s Computer Science department to ensure platform feasibility. Addiitonally, we have publised a research paper in IEEE.",
  },
  {
    position: "Core team member",
    organisation: "Entrepreneurship Cell, RVCE",
    startDate: "2022",
    endDate: "2023",
    image: "/assets/Ecell.png",
    tags: [
      {
        website: "ECell Website",
        link: "https://www.linkedin.com/company/entrepreneurship-cell-rvce/?originalSubdomain=in",
      },
    ],
    description:
      "I helped organize and conduct numerous offline and online events, collaborating with 100+ companies and securing partnerships to raise funding.",
  },
];
