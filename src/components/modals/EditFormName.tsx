import React from "react";
import "../../css/modal.css";

const AddFormName = ({ onCancel }) => {
  return (
    <div className="modal">
      <div className="box">
        <div className="top">
          <h1>Form Name</h1>
        </div>
        <div className="content">
          <input type="text" placeholder="name" />
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

export default AddFormName;
