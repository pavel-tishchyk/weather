import React from "react";
import './styles.scss';

function Slider({ className, orient, min, max, steps, value, defaultValue, readOnly, onChange}) {
  return (
    <div className={`slider ${className ? className : ""}`}>
      <input
        type="range" orient={orient}
        min={min} max={max}
        steps={steps} value={value}
        defaultValue={defaultValue}
        readOnly={readOnly}
        onChange={onChange}/>
    </div>
  );
}

export default Slider;