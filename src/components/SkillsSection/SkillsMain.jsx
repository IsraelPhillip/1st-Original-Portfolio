import React from "react";
import AllSkills from "./AllSkills";
import AllSkillSM from "./AllSkillSM";
import SkillsText from "./SkillsText";


const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden flex flex-col items-center">
        <div>

        <SkillsText />
        </div>

        <div className="hidden lg:flex justify-center w-full mt-12">
          <AllSkills />
        </div>

        <div className="block lg:hidden w-full mt-12">
          <AllSkillSM />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
