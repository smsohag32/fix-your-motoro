"use client";

import { useState } from "react";

import "@/components/PagesSection/Dasboard/UpComeAppt/tracking.modules.css";
import StepOne from "@/components/PagesSection/Dasboard/UpComeAppt/StepOne";
import StepTwo from "@/components/PagesSection/Dasboard/UpComeAppt/StepTwo";

const Steps = ({ order }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepOneCompleted, setStepOneCompleted] = useState(true);
  const [stepTwoCompleted, setStepTwoCompleted] = useState(false);

  // handle step next step
  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleStepOneComplete = () => {
    setStepTwoCompleted(true);
    setStepOneCompleted(false);
    handleNext();
  };
  const handleStepTwoComplete = () => {
    setCurrentStep(0);
    setStepTwoCompleted(false);
    setStepOneCompleted(true);
  };

  const steps = [
    {
      title: "Appointment Details",
      completed: stepOneCompleted,
      component: <StepOne onNext={handleStepOneComplete} order={order} />,
    },
    {
      title: "Apointment Status",
      completed: stepTwoCompleted,
      component: <StepTwo order={order} onNext={handleStepTwoComplete} />,
    },
  ];

  return (
    <div className="p-5">
      <div className="step-titles mb-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-title ${index === currentStep ? "active" : ""} ${
              step.completed ? "completed" : ""
            }`}
          >
            <span
              className={`step-number ${step.completed ? "completed" : ""}`}
            >
              {step.completed ? (
                <span className="completed-number">{index + 1}</span>
              ) : (
                index + 1
              )}
            </span>
            <span className={`step-name ${step.completed ? "completed" : ""}`}>
              {step.title}
            </span>
          </div>
        ))}
      </div>

      {steps.map((step, index) => (
        <div
          key={index}
          style={{ display: index === currentStep ? "block" : "none" }}
        >
          {step?.component}
        </div>
      ))}
    </div>
  );
};

export default Steps;
