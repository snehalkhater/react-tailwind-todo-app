import React from "react";
import { CircleX } from "lucide-react";

function TaskCard({ task, deleteTask }) {
  return (
    <div
      className="
        flex items-center justify-between
        bg-white p-4 mb-3 rounded-xl
        border-l-4 border-[#3b3b98]
        shadow-md hover:shadow-lg
        transition
      "
    >
      <p className="flex-1 text-[15px] text-[#3b3b98] font-medium break-words">
        {task}
      </p>

      <CircleX
        size={20}
        className="cursor-pointer text-[#3b3b98] hover:text-[#2f2f7a] hover:scale-110 transition"
        onClick={() => deleteTask(task)}
      />
    </div>
  );
}

export default TaskCard;
