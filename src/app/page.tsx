import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";

function page() {
  return (
    <TracingBeam>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="text-5xl font-bold">Hi, I'm Meeth</div>
            <div>
              A developer building cool solutions with open source technologies.
            </div>
          </div>
          <div>some image</div>
        </div>
      </div>
    </TracingBeam>
  );
}

export default page;
