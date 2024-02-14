// import React from "react";
// import { useState } from "react";
// import "./App.css";

// const Stepper = ({ data = [] }) => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [completed, setCompleted] = useState(false);
//   const [temp, setTemp] = useState(false);

//   const handlenext = () => {
//     setCurrentStep((prevstep) => {
//       if (prevstep === data.length) {
//         setCompleted(true);
//         setTemp(true);
//         return prevstep;
//       } else {
//         return prevstep + 1;
//       }
//     });
//   };
//   const Activecomponent = data[currentStep - 1]?.component;
//   const calculatewidth = () => {
//     return ((currentStep - 1) / (data.length - 1)) * 100;
//   };

//   return (
//     <>
//       <div className="stepper">
//         {data.map((datas, index) => (
//           <div
//             className={`step  ${
//               currentStep >= index + 1 || completed || temp ? "completed" : ""
//             } ${currentStep === index + 1 && !completed ? "active" : ""}`}
//             key={index}
//           >
//             {console.log(currentStep, index + 1)}
//             <div className="step-number">
//               {currentStep > index + 1 || completed ? (
//                 <span>&#10003;</span>
//               ) : (
//                 index + 1
//               )}
//             </div>
//             <div className="step-name">{datas.name}</div>
//           </div>
//         ))}
//       </div>
//       <div className="progress-bar">
//         <div
//           className="progress"
//           style={{ width:"100%" }}
//         ></div>
//       </div>
//       <Activecomponent />
//       {!completed && (
//         <button className="btn" onClick={handlenext}>
//           {currentStep === data.length ? "Finish" : "Next"}
//         </button>
//       )}
//     </>
//   );
// };

// export default Stepper;


import React from "react";
import { useState } from "react";
import "./App.css";

const Stepper = ({ data = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [temp, setTemp] = useState(false);

  const handlenext = () => {
    setCurrentStep((prevstep) => {
      if (prevstep === data.length) {
        setCompleted(true);
        setTemp(true);
        return prevstep;
      } else {
        return prevstep + 1;
      }
    });
  };
  const Activecomponent = data[currentStep - 1]?.component;
  const calculatewidth = () => {
    return ((currentStep - 1) / (data.length - 1)) * 100;
  };

  return (
    <>
      <div className="stepper">
        {data.map((datas, index) => (
          <div
            className={`step  ${
              currentStep >= index + 1 || completed || temp ? "completed" : ""
            } ${currentStep === index + 1 && !completed ? "active" : ""}`}
            key={index}
          >
            {console.log(currentStep, index + 1)}
            <div className="step-number">
              {currentStep > index + 1 || completed ? (
                <span>&#10003;</span>
              ) : (
                index + 1
              )}
            </div>
            <div className="step-name">{datas.name}</div>
          </div>
        ))}
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: calculatewidth() + "%" }} // Adjust the width dynamically
        ></div>
      </div>
      <Activecomponent />
      {!completed && (
        <button className="btn" onClick={handlenext}>
          {currentStep === data.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
};

export default Stepper;
