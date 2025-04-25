import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { Notebook } from "lucide-react";
import WorkExperience from "@/components/WorkExperience";
import {
  work,
  education,
  skills,
  projects,
  positions,
} from "@/components/data/workData";
import Education from "@/components/Education";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ProjectCard";
import Positions from "@/components/Positions";
import ContactForm from "@/components/ContactForm";
import { Navbar } from "@/components/Navbar";

const BLUR_FADE_DELAY = 0.04;

function page() {
  return (
    <TracingBeam>
      <div className="flex justify-center items-center">
        <Navbar />
      </div>
      <div className="flex flex-col justify-between sm:w-full px-8 ">
        <div className="flex flex-row mx-auto justify-around items-center w-full md:w-[75%]">
          <div className="flex flex-col ">
            <BlurFade
              className="text-3xl lg:text-6xl font-bold"
              delay={BLUR_FADE_DELAY}
              inView
            >
              Hi, I'm Meeth
            </BlurFade>
            <BlurFade
              delay={BLUR_FADE_DELAY}
              className="lg:text-xl text-[15px] font-normal max-w-[600px] mt-1"
            >
              A developer building cool solutions with open source technologies.
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <img
              src="/assets/Profile.png"
              alt="Profile pic"
              className="mx-1 rounded-full object-contain h-[6em] w-[13em] lg:h-28 lg:w-28 drop-shadow-md hover:drop-shadow-xl transition-all hover:duration-300 ease-in-out"
            />
          </BlurFade>
        </div>
        <section>
          <div className="flex flex-col mt-7 lg:mt-10">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <div className="font-semibold text-2xl">About</div>
            </BlurFade>
            <BlurFade className="mt-2" delay={BLUR_FADE_DELAY * 4}>
              <div className="font-normal text-gray-500">
                Hi, my name is Meeth J Davda, you can call me Meeth. Based in
                Bangalore, India, I am a full time{" "}
                <strong className="font-semibold text-gray-900">
                  Software Engineer Developer{" "}
                </strong>{" "}
                at Boeing India. As a
                <strong className="font-semibold text-gray-900">
                  {" "}
                  Full Stack developer
                </strong>
                , I enjoy both frontend and backend development equally.
                Additionally, I have written couple of research papers in the
                fields of Blockchain technology and Machine Learning.
              </div>
            </BlurFade>
            <div className="flex justify-end mt-2">
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <a href="/assets/Resume.pdf" download="Meeth's Resume.pdf">
                  <Button variant="outline" className="w-40 h-8">
                    <div className="text-xs">Download Resume</div>
                    <Notebook className="h-4 w-4" />
                  </Button>
                </a>
              </BlurFade>
            </div>
          </div>
        </section>
        <div className="flex mt-3 ">
          <BlurFade delay={BLUR_FADE_DELAY * 5} className="w-full">
            <div className="text-2xl font-semibold md:ml-24">
              Work Experience
            </div>
            <div className="flex justify-center items-center flex-col gap-4 mt-2">
              {work.map((job, index) => (
                <WorkExperience
                  key={index}
                  company={job.company}
                  jobTitle={job.jobTitle}
                  startDate={job.startDate}
                  endDate={job.endDate}
                  image={job.image}
                  description={job.description}
                />
              ))}
            </div>
          </BlurFade>
        </div>
        <div className="flex mt-14">
          <BlurFade delay={BLUR_FADE_DELAY * 6} className="w-full">
            <div className="text-2xl font-semibold">Education</div>
            {education.map((edu, index) => (
              <Education
                key={index}
                name={edu.name}
                qualification={edu.qualification}
                startDate={edu.startDate}
                endDate={edu.endDate}
                image={edu.image}
              />
            ))}
          </BlurFade>
        </div>
        <div className="flex mt-10">
          <BlurFade delay={BLUR_FADE_DELAY * 7} className="w-full md:ml-24">
            <div className="text-2xl font-semibold">Skills</div>
            <div className="flex flex-row flex-wrap gap-1 mt-4 justify-center ">
              {skills.map((skill, index) => (
                <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * index * 3}>
                  <Badge>
                    <span className="mr-2">{skill.icon}</span>
                    {skill.name}
                  </Badge>
                </BlurFade>
              ))}
            </div>
          </BlurFade>
        </div>
        <div>
          <BlurFade
            delay={BLUR_FADE_DELAY * 8}
            className="flex flex-col jucetify-center items-center mt-16"
          >
            <div className="text-5xl font-bold tracking-tight">Projects</div>
            <div className="text-lg md:text-xl/relaxed font-light text-gray-500 mt-2 text-center">
              I like to build projects. I have built a lot of projects, here are
              just some of my <span className="font-bold">favorites.</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[800px] mx-auto mt-8 ">
              {projects.map((project, index) => (
                <BlurFade
                  delay={BLUR_FADE_DELAY * 6 * index}
                  key={project.name}
                >
                  <ProjectCard
                    name={project.name}
                    startDate={project.startDate}
                    endDate={project.endDate}
                    image={project.image}
                    description={project.description}
                    tags={project.tags}
                    liveLinks={project.liveLinks}
                  />
                </BlurFade>
              ))}
            </div>
          </BlurFade>
        </div>
        <div>
          <BlurFade
            delay={BLUR_FADE_DELAY * 9}
            className="flex flex-col jucetify-center items-center mt-20"
          >
            <div className="md:text-5xl text-3xl font-bold tracking-tight text-center">
              Positions of Responsibility
            </div>
            <div className=" md:text-xl/relaxed font-light text-gray-500 mt-2 text-center">
              I believe in the power of collaboration, leadership, and
              innovation. I enjoy taking initiative in{" "}
              <span className="font-bold"> entrepreneurial</span> and
              <span className="font-bold"> community-driven</span> projects that
              challenge me to grow. Here are some of the roles I've taken on so
              far.
            </div>
            <ul className="w-full border-l divide-y divide-dashed mt-8">
              {positions.map((position, index) => (
                <Positions
                  position={position.position}
                  key={position.position}
                  startDate={position.startDate}
                  endDate={position.endDate}
                  description={position.description}
                  image={position.image}
                  organisation={position.organisation}
                  tags={position.tags}
                />
              ))}
            </ul>
          </BlurFade>
        </div>
        <div>
          <BlurFade
            delay={BLUR_FADE_DELAY * 10}
            className="flex flex-col jucetify-center items-center my-16"
          >
            <div className="md:text-5xl text-2xl font-bold tracking-tight">
              Get in Touch
            </div>
            <ContactForm />
          </BlurFade>
        </div>
      </div>
    </TracingBeam>
  );
}

export default page;
