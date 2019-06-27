import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncActionTodoList } from '../../../engine/core/todoData/saga/asyncAction';
import Style from './Done.module.scss';

const mapDispatchToProps = {
  onAllItemsDone: asyncActionTodoList.allItemsDoneAsync,
};

@connect(
  null,
  mapDispatchToProps,
)

export default class Done extends Component {
  render() {
    const { onAllItemsDone } = this.props;
    return (
      <div className={Style.AllDone}>
        <div className={Style.AllDone__CheckBlock}>
          <input type="checkbox" name="check" className={Style.AllDone__Input} onChange={onAllItemsDone} />
        </div>
        <p className={Style.AllDone__Title}>Все задачи выполнены</p>
      </div>
    );
  }
}
