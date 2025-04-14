import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { Notebook } from "lucide-react";
import WorkExperience from "@/components/WorkExperience";

const BLUR_FADE_DELAY = 0.04;

function page() {
  return (
    <TracingBeam>
      <div className="flex flex-col justify-between sm:w-full px-8 ">
        <div className="flex flex-row mx-auto justify-around items-center w-full">
          <div className="flex flex-col ">
            <BlurFade
              className="text-4xl lg:text-6xl font-bold"
              delay={BLUR_FADE_DELAY}
              inView
            >
              Hi, I'm Meeth
            </BlurFade>
            <BlurFade
              delay={BLUR_FADE_DELAY}
              className="lg:text-xl font-normal max-w-[600px]"
            >
              A developer building cool solutions with open source technologies.
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="bg-slate-400 rounded-full h-24 w-24 lg:h-28 lg:w-28 drop-shadow-md hover:drop-shadow-xl transition-all hover:duration-300 ease-in-out"></div>
          </BlurFade>
        </div>
        <section>
          <div className="flex flex-col mt-10">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <div className="font-semibold text-2xl">About</div>
            </BlurFade>
            <BlurFade className="mt-2" delay={BLUR_FADE_DELAY * 4}>
              <div className="font-light text-gray-500">
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
                    <div className="text-xs">Download Reasume</div>
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
            <div className="flex justify-center items-center">
              <WorkExperience />
            </div>
          </BlurFade>
        </div>
      </div>
    </TracingBeam>
  );
}

export default page;
