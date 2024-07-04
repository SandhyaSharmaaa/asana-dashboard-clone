import Hold from "./Hold";
import Doing from "./Doing";
import Done from "./Done";
import ToDo from "./ToDo";

const Section = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 gap- py-2 px-4">
      <ToDo />
      <Doing />
      <Done />
      <Hold />
    </div>
  );
};

export default Section;
