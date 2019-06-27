import React, { Component } from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar, faEdit, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Style from './TodoListItem.module.scss';

export default class TodoListItem extends Component {
  textInput = React.createRef();

  componentDidMount() {
    const { label } = this.props;
    this.textInput.current.value = label;
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { id, onEditItem, onToggleProperties } = this.props;
    const { current: { value } } = this.textInput;
    onEditItem(id, value);
    onToggleProperties(id, 'edit');
  }

  onEditChange = () => {
    const { onToggleProperties, id, label } = this.props;
    this.textInput.current.value = label;
    onToggleProperties(id, 'edit');
  }

  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.onEditChange();
    }
  }

  render() {
    const {
      important, done, edit, removeItem, onToggleProperties, id,
    } = this.props;
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
            <input type="checkbox" className={classNameDone} onChange={() => onToggleProperties(id, 'done')} />
          </div>
          <form onSubmit={this.onSubmit}>
            <input type="text" ref={this.textInput} className={classNameEdit} disabled={!edit} onKeyDown={this.onKeyDown} />
          </form>
        </div>
        <div className={Style.Item__Buttons}>
          <button type="button" className={className} onClick={() => onToggleProperties(id, 'important')}>
            <FontAwesomeIcon icon={faStar} />
          </button>
          <button type="button" className={Style.Item__ButtonEdit} onClick={this.onEditChange}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button type="button" className={Style.Item__ButtonDelete} onClick={removeItem}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    );
  }
}
