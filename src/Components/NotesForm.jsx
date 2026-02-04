import React, { useState } from "react";

const NotesForm = ({ addNote }) => {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    addNote({
      firstInput,
      secondInput,
    });

    setFirstInput("");
    setSecondInput("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full lg:w-1/2 flex flex-col gap-4 p-4 sm:p-6 lg:p-10 bg-gray-800 min-h-screen"
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center lg:text-left">
        Add Notes
      </h1>

      {/* Title Input */}
      <input
        type="text"
        placeholder="Enter Your Notes Heading"
        className="px-4 py-2 sm:px-5 sm:py-3 border-2 font-medium rounded-xl sm:rounded-2xl outline-none w-full bg-white text-black"
        value={firstInput}
        onChange={(e) => setFirstInput(e.target.value)}
      />

      {/* Description */}
      <textarea
        placeholder="Write Your Notes here"
        className="px-4 py-2 sm:px-5 sm:py-3 border-2 font-medium rounded-xl sm:rounded-2xl outline-none h-32 sm:h-40 lg:h-48 w-full bg-white text-black resize-none"
        value={secondInput}
        onChange={(e) => setSecondInput(e.target.value)}
      />

      {/* Button */}
      <button
        className="bg-white text-black font-semibold rounded-xl sm:rounded-2xl px-5 py-2 sm:py-3 w-full transition active:scale-95 hover:bg-gray-200"
      >
        Add Notes
      </button>
    </form>
  );
};

export default NotesForm;
