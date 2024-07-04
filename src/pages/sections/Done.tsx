import { FaPlus } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { useTasks } from "@/context/AppContext";
import { Card, CardContent } from "../../components/ui/card";
import { RiContactsLine } from "react-icons/ri";
import { CiCircleCheck } from "react-icons/ci";

const Done = () => {
  const { tasks, handleOpenForm, handleEditTask } = useTasks();

  return (
    <div className="flex flex-col gap-2  rounded-lg ">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <p className="text-white text-lg ">Done</p>
          <p className="text-gray-400">
            {tasks.filter((task) => task.status === "done").length}
          </p>
        </div>
        <div className="flex gap-4 text-white ">
          <FaPlus onClick={handleOpenForm} />
          <HiDotsVertical />
        </div>
      </div>
      {tasks
        .filter((task) => task.status === "done")
        .map((task, index) => (
          <Card
            key={index}
            className="section border-zinc-700 rounded-lg p-2 cursor-pointer  hover:border-zinc-500 transition"
            onClick={() => handleEditTask(task.id)}
          >
            <CardContent className="flex items-center p-2 gap-2">
              <CiCircleCheck size={20} />

              <p className="text-lg">{task.title}</p>
            </CardContent>
            <CardContent className="space-y-2 p-2">
              <p className="text-base text-white">{task.description}</p>
              <div className="flex items-center justify-start gap-4 text-gray-400">
                <RiContactsLine size={20} />
                <p>{task.date}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      <div
        className={`${
          tasks.filter((task) => task.status === "done").length > 0
            ? ""
            : "section"
        } rounded-lg  h-full`}
      >
        <p
          className="text-center font-semibold text-gray-400 p-4 cursor-pointer"
          onClick={handleOpenForm}
        >
          + Add task
        </p>
      </div>
    </div>
  );
};

export default Done;
