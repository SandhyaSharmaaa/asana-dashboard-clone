import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTasks } from "@/context/AppContext";

interface AddTaskModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, setIsOpen }) => {
  const { addTask, currEditTask, isEdit, handleUpdateTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<
    "to do" | "doing" | "done" | "hold" | ""
  >("");
  const [date, setDate] = useState("");

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value as "to do" | "doing" | "done" | "hold");
  };

  const handleSubmit = () => {
    if (!title || !description || !date || !status) {
      setError("Please fill all the fields given below");
      return;
    }

    if (isEdit) {
      handleUpdateTask({
        id: currEditTask.id,
        title,
        description,
        status,
        date,
      });
    } else {
      addTask({ id: crypto.randomUUID(), title, description, status, date });
    }
    setIsOpen(false);
    setDescription("");
    setTitle("");
    setDate("");
    setStatus("");
  };
  useEffect(() => {
    if (isEdit && currEditTask?.id) {
      setDescription(currEditTask.description);
      setTitle(currEditTask.title);
      setDate(currEditTask.date);
      setStatus(currEditTask.status);
    }
  }, [isEdit, currEditTask?.id]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="hidden">Open</button>
      </DialogTrigger>
      <DialogContent className="section">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Update Task" : "Add New Task"}</DialogTitle>
          {error && <p className="text-red-400">{error}</p>}
        </DialogHeader>
        <div className="flex flex-col space-y-2  text-sm font-bold">
          <label className="">Status</label>
          <select
            className="shadow-lg border rounded w-full py-2 px-3   focus:outline-blue-950"
            id="taskStatus"
            value={status}
            onChange={handleStatusChange}
          >
            <option value="" disabled>
              Select Status
            </option>

            <option value="to do">To Do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
            <option value="hold">Hold</option>
          </select>
          <label>Task Title</label>
          <input
            className="shadow-lg border rounded w-full py-2 px-3  focus:outline-blue-950"
            id="taskTitle"
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Description</label>
          <textarea
            className="shadow-lg border rounded w-full py-2 px-3   focus:outline-blue-950"
            id="taskDescription"
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label>Date</label>
          <input
            className="shadow-lg border rounded w-full py-2 px-3  focus:outline-blue-950"
            placeholder="Enter task date"
            value={date}
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />

          <div className="flex pt-2 justify-end">
            <button
              className="hover:bg-white bg-zinc-900 border   text-white hover:text-zinc-900 font-bold py-2 px-4 rounded  focus:shadow-outline transition duration-300"
              type="button"
              onClick={handleSubmit}
            >
              {isEdit ? "Save" : "Add Task"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskModal;
