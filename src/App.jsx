import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard.jsx";
import NotFound from "./assets/NotFound.jpg";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  const saveTasktoLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const addtask = () => {
    if (!newTask.trim()) return;
    const updatedTasks = [newTask, ...tasks];
    setTasks(updatedTasks);
    saveTasktoLocalStorage(updatedTasks);
    setNewTask("");
  };

  const deleteTask = (taskName) => {
    const filteredTasks = tasks.filter((t) => t !== taskName);
    setTasks(filteredTasks);
    saveTasktoLocalStorage(filteredTasks);
  };

  return (
    <div className="min-h-screen bg-[#f5f6fa] flex flex-col justify-center px-4">

      <h2 className="text-center text-[32px] text-[#3b3b98] mb-[6px] max-sm:text-[26px]">
        Todo App
      </h2>
      <p className="text-center text-[#6c6c8a] mb-6 max-sm:text-[14px] max-sm:mb-[18px]">
        Welcome to your Todo application!
      </p>

      <div className="p-5 w-[480px] h-[50vh] overflow-y-auto mx-auto mb-5 rounded-2xl bg-white
                      shadow-[0_12px_30px_rgba(0,0,0,0.2)]
                      max-sm:w-full max-sm:h-[55vh] max-sm:p-4 max-sm:rounded-[14px]">

        {tasks.map((task) => (
          <TaskCard
            key={task}
            task={task}
            deleteTask={deleteTask}
          />
        ))}

        {tasks.length === 0 && (
          <div className="mt-[50px] text-center text-[#9A3F3F] font-medium">
            <p>No tasks available. Please add a task</p>
            <img
              src={NotFound}
              alt="No Tasks"
              className="block mx-auto mt-3 w-[180px] rounded-lg object-cover"
            />
          </div>
        )}
      </div>

      <div className="w-[380px] mx-auto flex items-center justify-center gap-[10px]
                      max-sm:w-full max-sm:flex-col max-sm:gap-3">

        <input
          type="text"
          className="flex-1 max-w-[280px] px-6 py-[15px] rounded-[10px]
                     border border-gray-300 text-[15px] outline-none
                     focus:border-[#3b3b98]
                     max-sm:w-full max-sm:max-w-full
                     max-sm:px-[18px] max-sm:py-[14px] max-sm:text-[14px]"
          placeholder="Enter your task here..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button
          className="px-[18px] py-[12px] rounded-[10px]
                     bg-[#3b3b98] text-white text-[15px]
                     cursor-pointer transition-all duration-300
                     hover:bg-[#2f2f7a]
                     max-sm:w-full max-sm:py-[14px] max-sm:text-[14px]"
          onClick={addtask}
        >
          Add Task
        </button>

      </div>
    </div>
  );
}

export default App;
