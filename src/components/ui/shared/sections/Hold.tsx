import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { useTasks } from "@/components/ui/context/AppContext";
import { Card, CardContent } from "../../card";

const Hold: React.FC = () => {
  const { tasks, handleOpenForm, handleEditTask } = useTasks();

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 items-start justify-between ">
        <div className="flex gap-2 items-center">
          <p
            className="text-white text-lg cursor-pointer"
            onClick={handleOpenForm}
          >
            Hold
          </p>
          <p className="text-gray-400">
            {tasks.filter((task) => task.status === "hold").length}
          </p>
        </div>
        <div className="flex gap-4 text-white">
          <FaPlus className="cursor-pointer" onClick={handleOpenForm} />
          <HiDotsVertical />
        </div>
      </div>
      {tasks
        .filter((task) => task.status === "hold")
        .map((task, index) => (
          <Card
            key={index}
            className="section border-zinc-700 rounded-lg p-2"
            onClick={() => handleEditTask(task.id)}
          >
            <CardContent className="flex items-center p-2 gap-2">
              <p className="text-lg">{task.title}</p>
            </CardContent>
            <CardContent className="space-y-2 p-2">
              <p className="text-base text-white">{task.description}</p>
              <div className="flex items-center justify-start gap-4">
                <p className="text-gray-400">{task.date}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      <div
        className={`${
          tasks.filter((task) => task.status === "hold").length > 0
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
      {/* <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </div>
  );
};

export default Hold;
