import React, { useState } from "react";
import Modal from '../components/modals/Template'

const ModalTest = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="modalTest">
      {showModal ? <Modal onCancel={() => setShowModal(false)} /> : null}
      <h1>modal test</h1>
      <button onClick={() => setShowModal(true)}>show modal</button>
      <button onClick={() => setShowModal(true)}>show dialog</button>
    </div>
  );
};

export default ModalTest;
