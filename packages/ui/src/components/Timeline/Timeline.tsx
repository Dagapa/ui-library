import { ReactElement } from "react";
import CheckLigthIcon from "../../assets/icons/CheckLigthIcon";
import MagnifyingGlassIcon from "../../assets/icons/MagnifyingGlassIcon";
import "./Timeline.css";

export interface TimelineStep {
  value: number;
  label: string;
  icon?: ReactElement;
}

export interface TimelineProps {
  steps: TimelineStep[];
  currentStep: number;
}

export function Timeline({ steps, currentStep }: TimelineProps) {

  return (
    <div className="ui-library-timeline">
      {steps.map(({ value, label, icon }) => {
        const isCompleted = value < currentStep;
        const isActive = value === currentStep;

        return (
          <div
            key={value}
            className={`ui-library-timeline__item${isCompleted ? " ui-library-timeline__item--completed" : ""}${isActive ? " ui-library-timeline__item--active" : ""}`}
          >
            <div className="ui-library-timeline__dot-container">
              <div className="ui-library-timeline__dot" >
                {isCompleted ? (<CheckLigthIcon/>) : icon ?? <MagnifyingGlassIcon/>}
              </div>
              <span className="ui-library-timeline__label">{label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
