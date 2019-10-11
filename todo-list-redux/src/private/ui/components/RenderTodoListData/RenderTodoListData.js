import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Style from './RenderTodoListData.module.scss';
import RenderTasks from '../RenderTasks';

const RenderTodoListData = ({
  visibleArrData, removeItem, onToggleProperties, onEditItem,
}) => (
  <div className={Style.TodoItems}>
    <ReactCSSTransitionGroup
      transitionName={{
        enter: Style.ExampleEnter,
        enterActive: Style.ExampleEnterActive,
        leave: Style.ExampleLeave,
        leaveActive: Style.ExampleLeaveActive,
      }}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {
        visibleArrData.map((item) => {
          const { id } = item;
          return (
            <RenderTasks
              key={id}
              item={item}
              removeItem={removeItem}
              onToggleProperties={onToggleProperties}
              onEditItem={onEditItem}
            />
          );
        })
      }
    </ReactCSSTransitionGroup>
  </div>
);

export default RenderTodoListData;
