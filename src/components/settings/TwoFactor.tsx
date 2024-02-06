import React from "react";
import "../../css/modal.css";

const TwoFactor = ({ onCancel }) => {
  return (
    <div className="modal">
      <div className="page">
        <div className="page-nav">
          <button>settings</button>
          <button>cancel</button>
        </div>
        <div className="page-content">
          <h1>2 factor</h1>
          <button onClick={() => onCancel()}>cancel</button>
        </div>
      </div>
    </div>
  );
};

export default TwoFactor;