import { useState } from "react";
import "../css/console.css";
import AddForm from "../components/modals/AddForm";
const Console = () => {

  const [show, setShow] = useState(false)

  return (
    <div className="console">
      {
        show ? <AddForm onCancel={() => setShow(false)} /> : null
      }
      <div className="console-search">
        <input type="text" placeholder="seach forms" />
        <button onClick={() => setShow(true)}>add new</button>
      </div>
      <h1 className="heading">Forms</h1>

      <div className="container">
        <div className="box">
          <h1>name</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
        </div>
        <div className="box">
          <h1>name</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
        </div>
        <div className="box">
          <h1>name</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
        </div>
      </div>
    </div>
  );
};

export default Console;
