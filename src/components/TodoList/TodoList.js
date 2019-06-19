import React from 'react';
import PropTypes from 'prop-types';
import Style from './TodoList.module.scss';
import TodoListRender from '../TodoListRender';

const TodoList = ({
  todoData, onDelete, onToggleDone, onToggleImportant, onToggleEdit, onEdit,
}) => (
  <div className={Style.TodoItems}>
    <TodoListRender
      todoData={todoData}
      onDelete={onDelete}
      onToggleDone={onToggleDone}
      onToggleImportant={onToggleImportant}
      onToggleEdit={onToggleEdit}
      onEdit={onEdit}
    />
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
