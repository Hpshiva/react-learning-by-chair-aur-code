import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  function hanglesub(e) {
    e.preventDefault();
    // alert("hi");
  }
  return (
    <div>
      <form
        onSubmit={hanglesub}
        action=""
        className="p-4 bg-gray-600 rounded-md w-fit flex flex-col gap-4"
      >
        <input
          type="text"
          className="outline"
          placeholder="Enter Name "
          onChange={(e) => setName(e.target.value)}
        />
        <p className="h-[5rem] bg-gray-300 text-black">{name}</p>

        <button type="submit" className="px-5 py-2 rounded bg-green-500">
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
