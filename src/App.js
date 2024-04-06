import { Children, useState } from "react";

//learning
//state  Data that a components can hold over time , state is components memory

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  // create state at inital value 1 for step
  const [step, setstep] = useState(1);
  // for toggle set to true initially
  const [isopen, setisopen] = useState(true);

  // this will decrease the value of step
  function handleprevious() {
    if (step > 1) setstep((s) => s - 1);
  }

  // this will increase the value of step
  function handlenext() {
    if (step < 3) setstep((s) => s + 1);
  }

  return (
    <>
      {/* this chnage  the value onclicking on button through state function */}
      <button className="close" onClick={() => setisopen((is) => !is)}>
        &times;
      </button>
      {isopen && (
        <div className="steps">
          <div className="numbers">
            {/* set the active class according to to step value */}
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            {/* display the message for according to steps  */}
            step {step}:{messages[step - 1]}
          </p>

          <div className="buttons">
            {/* button components to handle state functions  */}
            <Button bgcolor="#7950f2" textcolor="#fff" onClick={handleprevious}>
              <span>👈Previous</span>
            </Button>
            <Button bgcolor="#7950f2" textcolor="#fff" onClick={handlenext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textcolor, bgcolor, onClick, text, children }) {
  return (
    <button
      style={{ backgroundColor: bgcolor, color: textcolor }}
      onClick={onClick}
    >
      {children}
      {text}
    </button>
  );
}
