import Add from "./Add";
import Doing from "./Doing";
import Done from "./Done";
import SectionHeader from "./SectionHeader";
import ToDo from "./ToDo";

const Section = () => {
  return (
    <div className="flex flex-col gap-4 w-full ">
      <SectionHeader />
      <div className="flex gap-6   ">
        <ToDo />
        <Doing />
        <Done />
        <Add />
      </div>
    </div>
  );
};

export default Section;
