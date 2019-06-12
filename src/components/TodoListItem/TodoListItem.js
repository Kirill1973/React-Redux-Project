import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import Style from './TodoListItem.module.scss';

export default class TodoListItem extends Component {
  render() {
    const {
      label, important, onDelete, onToggleDone, onToggleImportant,
    } = this.props;
    let className = Style.Item__ButtonImportant;
    if (important) {
      className += ` ${Style.Important}`;
    }
    return (
      <div className={Style.Item}>
        <div className={Style.Item__Desc}>
          <div className={Style.Item__ChekBlock}>
            <input type="checkbox" className={Style.Item__Input} onChange={onToggleDone} />
          </div>
          <p className={Style.Item__Title}>{label}</p>
        </div>
        <div className={Style.Item__Buttons}>
          <button type="button" className={className} onClick={onToggleImportant}>
            <FontAwesomeIcon icon={faStar} />
          </button>
          <button type="button" className={Style.Item__ButtonEdit}>
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
