import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [step, setstep] = useState(1);
  const [isopen, setisopen] = useState(true);

  function handleprevious() {
    if (step > 1) setstep((s) => s - 1);
  }

  function handlenext() {
    if (step < 3) setstep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setisopen((is) => !is)}>
        &times;
      </button>
      {isopen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            step {step}:{messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleprevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlenext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
