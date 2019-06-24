import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar, faEdit, faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Style from './TodoListItem.module.scss';

export default class TodoListItem extends Component {
  state = {
    editLabel: '',
  };

  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.onClickEdit();
    }
  };

  componentDidMount() {
    const { label } = this.props;
    this.setState({ editLabel: label });
  }

  onChangeLabel = (event) => {
    this.setState({ editLabel: event.target.value });
  };

  onSubmit = (event) => {
    const { onEdit, id, onToggleEdit } = this.props;
    const { editLabel } = this.state;
    event.preventDefault();
    onEdit(id, editLabel);
    onToggleEdit(id);
  };

  onClickEdit = () => {
    const { onToggleEdit, label, id } = this.props;
    onToggleEdit(id);
    this.setState({ editLabel: label });
  };

  render() {
    const { editLabel } = this.state;
    const {
      important, done, edit, onDelete, onToggleDone, onToggleImportant,
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
            <input type="checkbox" className={classNameDone} onChange={onToggleDone} />
          </div>
          <form onSubmit={this.onSubmit}>
            <input type="text" value={editLabel} className={classNameEdit} onKeyDown={this.onKeyDown} disabled={!edit} onChange={this.onChangeLabel} />
          </form>
        </div>
        <div className={Style.Item__Buttons}>
          <button type="button" className={className} onClick={onToggleImportant}>
            <FontAwesomeIcon icon={faStar} />
          </button>
          <button type="button" className={Style.Item__ButtonEdit} onClick={this.onClickEdit}>
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

TodoListItem.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  important: PropTypes.bool,
  done: PropTypes.bool,
  edit: PropTypes.bool,
  onDelete: PropTypes.func,
  onToggleDone: PropTypes.func,
  onToggleImportant: PropTypes.func,
  onToggleEdit: PropTypes.func,
  onEdit: PropTypes.func,
};
