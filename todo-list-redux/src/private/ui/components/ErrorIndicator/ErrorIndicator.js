import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Style from './ErrorIndicator.module.scss';

const ErrorIndicator = () => (
  <ReactCSSTransitionGroup
    transitionName={{
      enter: Style.Enter,
      enterActive: Style.EnterActive,
      leave: Style.Leave,
      leaveActive: Style.LeaveActive,
      appear: Style.Appear,
      appearActive: Style.AppearActive,
    }}
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}
    transitionAppear
  >
    <div className={Style.Error}>
      <p>This id is already in the list</p>
    </div>
  </ReactCSSTransitionGroup>
);

export default ErrorIndicator;
