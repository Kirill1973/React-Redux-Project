import React from 'react';
import Style from './TodoList.module.scss';
import TodoListItem from '../TodoListItem';

const TodoList = ({
  todoData, onDelete, onToggleDone, onToggleImportant,
}) => {
  const elements = todoData.map((item) => {
    const {
      id, label, done, important,
    } = item;
    let className = Style.TodoItem;
    if (done) {
      className += ` ${Style.Done}`;
    }
    return (
      <div key={id} className={className}>
        <TodoListItem
          important={important}
          label={label}
          onDelete={() => onDelete(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </div>
    );
  });

  return (
    <div className={Style.TodoItems}>
      {elements}
    </div>
  );
};

export default TodoList;
