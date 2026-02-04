import React from "react";
import NoteCard from "./NoteCard";

const NotesList = ({ task, deleteNote }) => {
  return (
    <div className="w-full lg:w-1/2 bg-gray-900 min-h-screen p-4 sm:p-6 lg:p-9">
      
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5 text-center lg:text-left">
        Recent Notes
      </h1>

      {/* Notes Grid */}
      <div
        className="grid grid-cols-2
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-2 
        xl:grid-cols-3 
        gap-5 overflow-y-auto no-scrollbar max-h-[80vh] place-items-center"
      >
        {task.map((elem, idx) => (
          <NoteCard
            key={idx}
            elem={elem}
            idx={idx}
            deleteNote={deleteNote}
          />
        ))}
      </div>

    </div>
  );
};

export default NotesList;
