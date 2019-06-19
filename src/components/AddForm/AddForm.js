import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Style from './AddForm.module.scss';

export default class AddForm extends Component {
  state = {
    label: '',
  };

  onSubmit = (event) => {
    const { onAdd } = this.props;
    const { label } = this.state;
    event.preventDefault();
    onAdd(label);
    this.setState({ label: '' });
  };

  onLabelChange = (event) => {
    this.setState({ label: event.target.value });
  };

  render() {
    const { label } = this.state;
    return (
      <form className={Style.AddForm} onSubmit={this.onSubmit}>
        <input className={Style.AddForm__Input} value={label} onChange={this.onLabelChange} maxLength="50" placeholder="Описание моей новой задачи" />
        <button type="button" className={Style.AddForm__Button} onClick={this.onSubmit}>
          <FontAwesomeIcon icon={faPlus} className={Style.AddForm__ButtonIcon} />
          <p className={Style.AddForm__ButtonText}>Добавить задачу</p>
        </button>
      </form>
    );
  }
}

AddForm.propTypes = {
  onAdd: PropTypes.func,
};
