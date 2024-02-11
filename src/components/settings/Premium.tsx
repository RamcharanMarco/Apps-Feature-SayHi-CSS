import React, { useState } from "react";
import "../../css/premium.css";

const Premium = ({ onCancel }) => {
  const [page, setPage] = useState(1);

  const prev = () => {
    if (page === 1) {
      return;
    }
    setPage((prev) => prev - 1);
  };

  const next = () => {
    if (page === 5) {
      return;
    }
    setPage((prev) => prev + 1);
  };

  return (
    <div className="modal">
      <div className="wizard">
        <div className="wizard-top">
          <h1>upgrade package</h1>
        </div>
        {page === 1 ? (
          <div className="wizard-content wizard-premium">
            <p>billing address</p>
            <input type="text" placeholder="street address" />
            <input type="text" placeholder="city" />
            <input type="text" placeholder="zip" />
            <input type="text" placeholder="state" />
            <input type="text" placeholder="country" />
          </div>
        ) : page === 2 ? (
          <div className="wizard-content">
            <p>billing email</p>
            <input type="text" placeholder="email" />
          </div>
        ) : page === 3 ? (
          <div className="wizard-content">
            <p>payment</p>
            <input type="text" placeholder="card no" />
            <input type="text" placeholder="mm/yy/year" />
            <input type="text" placeholder="svc" />
          </div>
        ) : page === 4 ? (
          <div className="wizard-content">
            <p>place order</p>
            <div className="placeorder">
              <h1>your plan</h1>
              <hr />
              <h2>premium</h2>
              <p>E 99/Year</p>
              <hr />
              <p>features</p>
              <ul>
                <li>ffff</li>
                <li>dddddd</li>
              </ul>
              <hr />
              <p>subtotoa e99.00</p>
              <p>estimated tax 0</p>
              <hr />
              <p>total/year e99.00</p>
            </div>
          </div>
        ) : page === 5 ? (
          <div className="wizard-content">
            <h1>Confirmation</h1>
            <p>you are now oremium</p>
            <button>close</button>
          </div>
        ) : null}

        <div className="wizard-bottom">
          <button onClick={() => onCancel()}>cancel</button>
          <button onClick={() => prev()}>prev</button>
          {page === 5 ? (
            <button onClick={() => onCancel()}>next</button>
          ) : (
            <button onClick={() => next()}>next</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Premium;
