import React from "react";

const NoteCard = ({ elem, idx, deleteNote }) => {
  return (
    <div
      className="flex justify-between flex-col relative h-52 w-40 pt-5 px-4 pb-2 
      text-black rounded-2xl 
      bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] 
      bg-cover"
    >
      <h3 className="leading-tight font-bold text-xl">
        {elem.firstInput}
      </h3>

      <p className="mt-1 text-sm h-36  leading-tight overflow-y-auto no-scrollbar">
        {elem.secondInput}
      </p>

      <button
        onClick={() => deleteNote(idx)}
        className="bg-red-800 text-white rounded active:scale-95 text-xs font-bold h-4 w-full mt-2"
      >
        Delete
      </button>
    </div>
  );
};

export default NoteCard;
