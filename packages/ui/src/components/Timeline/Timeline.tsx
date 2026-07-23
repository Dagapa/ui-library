import CheckLigthIcon from "../../assets/icons/CheckLigthIcon";
import MagnifyingGlassIcon from "../../assets/icons/MagnifyingGlassIcon";
import "./Timeline.css";

export interface TimelineItem {
  value: string;
  label: string;
}

export interface TimelineProps {
  items: TimelineItem[];
  activeValue: string;
}

export function Timeline({ items, activeValue }: TimelineProps) {
  const activeIndex = items.findIndex((item) => item.value === activeValue);

  return (
    <div className="ui-library-timeline">
      {items.map((item, index) => {
        const isCompleted = index < activeIndex;
        const isActive = item.value === activeValue;

        return (
          <div
            key={item.value}
            className={`ui-library-timeline__item${isCompleted ? " ui-library-timeline__item--completed" : ""}${isActive ? " ui-library-timeline__item--active" : ""}`}
          >
            <div className="ui-library-timeline__dot-container">
              <div className="ui-library-timeline__dot" >
                {isCompleted ? (<CheckLigthIcon/>) : (<MagnifyingGlassIcon/>)}
              </div>
              <span className="ui-library-timeline__label">{item.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
