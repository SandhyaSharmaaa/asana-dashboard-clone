import React, { createContext, useState, useContext, ReactNode } from "react";
import AddTaskModal from "../shared/AddTaskModal";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "to do" | "doing" | "done" | "hold";
  date: string;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  handleOpenForm: () => void;
  handleEditTask: (id: string) => void;
  currEditTask: Task;
  isEdit: boolean;
  setTasks: (arg: Task[]) => void;
  handleUpdateTask: (task: Task) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currEditTask, setCurrEditTask] = useState<Task | null>(null);
  const addTask = (task: Task) => {
    console.log({ task });
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const handleEditTask = (id: string) => {
    const task = tasks.find((i) => i.id === id);
    console.log(task, "task");
    setCurrEditTask(task);
    setIsEdit(true);
    setIsOpen(true);
  };
  const handleUpdateTask = (updatedTask: Task) => {
    const newTasks = [...tasks];
    const foundIndex = newTasks.findIndex((i) => i.id === currEditTask.id);

    // console.log(foundIndex, "foundIndex");

    newTasks[foundIndex] = updatedTask;
    setTasks(newTasks);
    setIsEdit(false);
    setCurrEditTask(null);
    // console.log(newTasks, "bharti");
  };
  const handleOpenForm = () => {
    setIsOpen(true);
  };
  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        handleOpenForm,
        handleEditTask,
        currEditTask,
        isEdit,
        setTasks,
        handleUpdateTask,
      }}
    >
      <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen} />
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
