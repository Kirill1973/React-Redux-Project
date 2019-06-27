import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { asyncActionTodoList } from '../../../engine/core/todoData/saga/asyncAction';
import Style from './AddForm.module.scss';

const mapDispatchToProps = {
  addItem: asyncActionTodoList.addItemAsync,
};

@connect(
  null,
  mapDispatchToProps,
)

export default class AddForm extends Component {
  textInput = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const { current: { value } } = this.textInput;
    const { addItem } = this.props;
    if (value.length !== 0) {
      addItem(value);
    }
    this.textInput.current.value = '';
  };

  render() {
    return (
      <form className={Style.AddForm} onSubmit={this.onSubmit}>
        <input className={Style.AddForm__Input} ref={this.textInput} maxLength="50" placeholder="Описание моей новой задачи" />
        <button type="button" className={Style.AddForm__Button} onClick={this.onSubmit}>
          <FontAwesomeIcon icon={faPlus} className={Style.AddForm__ButtonIcon} />
          <p className={Style.AddForm__ButtonText}>Добавить задачу</p>
        </button>
      </form>
    );
  }
}

AddForm.propTypes = {
  addItem: PropTypes.func,
};
