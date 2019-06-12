import React, { Component } from 'react';
import Style from './Done.module.scss';

export default class Done extends Component {
  render() {
    const { onAllItemDone } = this.props;
    return (
      <div className={Style.AllDone}>
        <div className={Style.AllDone__ChekBlock}>
          <input type="checkbox" name="check" className={Style.AllDone__Input} onChange={onAllItemDone} />
        </div>
        <p className={Style.AllDone__Title}>Все задачи выполнены</p>
      </div>
    );
  }
}
