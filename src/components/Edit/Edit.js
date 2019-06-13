import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Style from './Edit.module.scss';

export default class Edit extends Component {
    state = {
      editTermInput: '',
    }

    componentDidMount() {
      const { editTerm } = this.props;
      this.setState({ editTermInput: editTerm });
    }

    onInputChange = (event) => {
      this.setState({ editTermInput: event.target.value });
    }

    onSubmit = (event) => {
      const { id, onEdit, onToggleEdit } = this.props;
      const { editTermInput } = this.state;
      event.preventDefault();
      onEdit(id, editTermInput);
      onToggleEdit(id);
    }

    onKeyPress = (event) => {
      if (event.keyCode === 27) {
        const { onToggleEdit, id } = this.props;
        onToggleEdit(id);
      }
    }

    render() {
      const { editTermInput } = this.state;
      const { onToggleEdit } = this.props;
      return (
        <form className={Style.Edit} onSubmit={this.onSubmit}>
          <input type="text" className={Style.Edit__Input} onKeyDown={this.onKeyPress} value={editTermInput} onChange={this.onInputChange} />
          <button type="button" className={Style.Edit__Button} onClick={onToggleEdit}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </form>
      );
    }
}
