import React from "react";
import './styles.scss';

function Progress({value}) {
  const deg = (value * 12) - 45;

  React.useEffect(() => {
    document.getElementsByClassName('percents')[0].animate([
      {transform: `translate(-50%, -20%) rotate(-45deg)`},
      {transform: `translate(-50%, -20%) rotate(${deg}deg)`}
    ], {
      duration: 500,
      iterations: 1
    })
  }, [])

  return (
    <div className="progress">
      <div className="barOverflow">
        <div className="scale">
          <div className="division three">3</div>
          <div className="division six">6</div>
          <div className="division nine">9</div>
          <div className="division twelve">12</div>
        </div>
        <div className="bar">
        </div>
        <div
          className="percents"
          style={{transform: `translate(-50%, -20%) rotate(${deg}deg)`}}>
        </div>
      </div>
      <span>{value.toFixed((1))}</span>
    </div>
  );
}

export default Progress;