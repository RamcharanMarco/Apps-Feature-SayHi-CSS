import React from "react";
import "../../css/modal.css";

const AddForm = ({ onCancel }) => {
  return (
    <div className="modal">
      <div className="box">
        <div className="top">
          <h1>Add New Form</h1>
        </div>
        <div className="content">
          <input type="text" placeholder="email" />
          <input type="text" placeholder="name" />
          <input type="text" placeholder="heading" />
          <p className="error"></p>
        </div>

        <div className="bottom">
          <button onClick={() => onCancel()}>cancel</button>
          <button onClick={() => onCancel()}>save</button>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
