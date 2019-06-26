import React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar, faEdit, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Style from './TodoListItem.module.scss';

const TodoListItem = ({
  important, done, edit, label, removeItem, onToggleDone,
}) => {
  const className = cx(Style.Item__ButtonImportant, {
    [Style.Important]: important,
  });
  const classNameDone = cx(Style.Item__Input, {
    [Style.Done]: done,
  });
  const classNameEdit = cx(Style.Item__Title, {
    [Style.Item__Active]: edit,
  });
  return (
    <div className={Style.Item}>
      <div className={Style.Item__Desc}>
        <div className={Style.Item__ChekBlock}>
          <input type="checkbox" className={classNameDone} onChange={onToggleDone} />
        </div>
        <form>
          <input type="text" value={label} className={classNameEdit} disabled={!edit} />
        </form>
      </div>
      <div className={Style.Item__Buttons}>
        <button type="button" className={className}>
          <FontAwesomeIcon icon={faStar} />
        </button>
        <button type="button" className={Style.Item__ButtonEdit}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button type="button" className={Style.Item__ButtonDelete} onClick={removeItem}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
