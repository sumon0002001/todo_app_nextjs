import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";

const AddTask = () => {
  const [modelOpen, ModelSetOpen] = useState<boolean>(false);
  return (
    <div>
      <button className="btn btn-primary w-full">
        Add new task
        <FaPlus className="ml-2" size={18} />
      </button>
      <form action="">
        <h3>Add a new task</h3>
        <div className="modal-action">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn">
            Submit
          </button>
          <Modal modelOpen={modelOpen} />
        </div>
      </form>
    </div>
  );
};

export default AddTask;
