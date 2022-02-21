import React from "react";
import './styles.scss';
import {CSSTransition, SwitchTransition} from "react-transition-group";

function Fade({transitionKey, children}) {
  return (
    <SwitchTransition>
      <CSSTransition
        in={true} key={transitionKey}
        appear={true} timeout={500}
        unmountOnExit mountOnEnter
        classNames={{
          appear: 'animate__fadeIn',
          appearActive: 'animate__fadeIn',
          enter: 'animate__fadeIn',
          enterActive: 'animate__fadeIn',
          exit: 'animate__fadeOut',
          exitActive: 'animate__fadeOut',
        }}>
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
}

export default Fade;
