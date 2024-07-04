import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import AddTaskModal from "../components/ui/shared/AddTaskModal";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "to do" | "doing" | "done" | "hold" | "";
  date: string;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  handleOpenForm: () => void;
  handleEditTask: (id: string) => void;
  currEditTask: Task | null;
  isEdit: boolean;
  setTasks: (arg: Task[]) => void;
  handleUpdateTask: (task: Task) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currEditTask, setCurrEditTask] = useState<Task | null>(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    console.log({ task });
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const handleEditTask = (id: string) => {
    const task = tasks.find((i) => i.id === id);
    console.log(task, "task");
    setCurrEditTask(task || null);
    setIsEdit(true);
    setIsOpen(true);
  };

  const handleUpdateTask = (updatedTask: Task) => {
    const newTasks = [...tasks];
    const foundIndex = newTasks.findIndex((i) => i.id === currEditTask?.id);

    if (foundIndex !== -1) {
      newTasks[foundIndex] = updatedTask;
      setTasks(newTasks);
      setIsEdit(false);
      setCurrEditTask(null);
    }
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
