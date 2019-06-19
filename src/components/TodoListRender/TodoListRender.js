import React from 'react';
import RenderTasks from '../RenderTasks';

const TodoListRender = ({
  todoData, onDelete, onToggleDone, onToggleImportant, onToggleEdit, onEdit,
}) => todoData.map((item) => {
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
});

export default TodoListRender;
