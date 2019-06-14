import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar, faEdit, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Style from './TodoListItem.module.scss';


export default class TodoListItem extends Component {
  render() {
    const {
      label, important, done, onDelete, onToggleDone, onToggleImportant, onToggleEdit,
    } = this.props;
    let className = Style.Item__ButtonImportant;
    let classNameDone = Style.Item__Input;
    if (important) {
      className += ` ${Style.Important}`;
    }
    if (done) {
      classNameDone += ` ${Style.Done}`;
    }
    return (
      <div className={Style.Item}>
        <div className={Style.Item__Desc}>
          <div className={Style.Item__ChekBlock}>
            <input type="checkbox" className={classNameDone} onChange={onToggleDone} />
          </div>
          <p className={Style.Item__Title}>{label}</p>
        </div>
        <div className={Style.Item__Buttons}>
          <button type="button" className={className} onClick={onToggleImportant}>
            <FontAwesomeIcon icon={faStar} />
          </button>
          <button type="button" className={Style.Item__ButtonEdit} onClick={onToggleEdit}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button type="button" className={Style.Item__ButtonDelete} onClick={onDelete}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    );
  }
}
