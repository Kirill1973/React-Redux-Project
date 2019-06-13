import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Style from './TodoList.module.scss';
import TodoListItem from '../TodoListItem';
import Edit from '../Edit';

const TodoList = ({
  todoData, onDelete, onToggleDone, onToggleImportant, onToggleEdit, onEdit, editTerm,
}) => {
  const elements = todoData.map((item) => {
    const {
      id, label, done, important, edit,
    } = item;
    let className = Style.TodoItem;
    if (done) {
      className += ` ${Style.Done}`;
    }
    if (edit) {
      return (
        <div key={id} className={className}>
          <Edit onToggleEdit={() => onToggleEdit(id)} id={id} onEdit={onEdit} editTerm={editTerm} />
        </div>
      );
    }
    return (
      <ReactCSSTransitionGroup transitionName="option" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        <div key={id} className={className}>
          <TodoListItem
            done={done}
            important={important}
            label={label}
            onDelete={() => onDelete(id)}
            onToggleDone={() => onToggleDone(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleEdit={() => onToggleEdit(id)}
          />
        </div>
      </ReactCSSTransitionGroup>
    );
  });

  return (
    <div className={Style.TodoItems}>
      {elements}
    </div>
  );
};

export default TodoList;
