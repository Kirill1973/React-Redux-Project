import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { asyncActionTodoList } from '../../../engine/core/todoData/saga/asyncAction';
import Style from './TodoItemDetails.module.scss';


const mapStateToProps = (state, ownProps) => ({
  item: state.todoListData.get('todoListArray').find(item => item.id === Number(ownProps.match.params.id)),
});

const mapDispatchToProps = {
  onToggleProperties: asyncActionTodoList.onTogglePropertiesAsync,
  onEditItem: asyncActionTodoList.editItemAsync,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default class TodoItemDetails extends Component {
  valueInput = React.createRef();

  componentDidMount() {
    const { item: { label } } = this.props;
    this.valueInput.current.value = label;
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { item: { id }, onEditItem, onToggleProperties } = this.props;
    const { current: { value } } = this.valueInput;
    onEditItem(id, value);
    onToggleProperties(id, 'edit');
  };

  render() {
    const {
      item: {
        label, id, important, done, edit,
      }, onToggleProperties,
    } = this.props;
    const classNameEdit = cx(Style.TodoItemDetails__Form, {
      [Style.TodoItemDetails__Active]: edit,
    });
    const importantTerm = important ? 'Важная задача' : 'Не важная задача';
    const doneTerm = done ? 'Выполнена' : 'Не выполнена';
    return (
      <div className={Style.TodoItemDetails}>
        <p className={Style.TodoItemDetails__Title2}>{`${label}(${importantTerm}, ${doneTerm})`}</p>
        <div className={Style.TodoItemDetails__ButtonGroup}>
          <button type="button" className={Style.TodoItemDetails__ButtonItem} onClick={() => onToggleProperties(id, 'edit')}>Редактировать</button>
          <button type="button" className={Style.TodoItemDetails__ButtonItem} onClick={() => onToggleProperties(id, 'important')}>Поменять приоритетность</button>
          <button type="button" className={Style.TodoItemDetails__ButtonItem} onClick={() => onToggleProperties(id, 'done')}>Поменять выполненость</button>
        </div>
        <form className={classNameEdit} onSubmit={this.onSubmit}>
          <input type="text" ref={this.valueInput} className={Style.TodoItemDetails__Input} />
        </form>
        <Link to="/" className={Style.TodoItemDetails__Link}>
          назад к задачам
        </Link>
      </div>
    );
  }
}
