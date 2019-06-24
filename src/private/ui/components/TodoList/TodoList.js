import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Style from './TodoList.module.scss';
import RenderTasks from '../RenderTasks';

const TodoList = ({
  todoData, onDelete, onToggleDone, onToggleImportant, onToggleEdit, onEdit,
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
      transitionLeaveTimeout={300}
    >
      {
      todoData.map((item) => {
        const { id } = item;
        return (
          <RenderTasks
            key={id}
            item={item}
            onDelete={onDelete}
            onToggleDone={onToggleDone}
            onToggleImportant={onToggleImportant}
            onToggleEdit={onToggleEdit}
            onEdit={onEdit}
          />
        );
      })
    }
    </ReactCSSTransitionGroup>
  </div>
);

TodoList.propTypes = {
  todoData: PropTypes.array,
  onDelete: PropTypes.func,
  onToggleDone: PropTypes.func,
  onToggleImportant: PropTypes.func,
  onToggleEdit: PropTypes.func,
  onEdit: PropTypes.func,
};

export default TodoList;
