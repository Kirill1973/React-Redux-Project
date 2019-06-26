import React from 'react';
import Style from './Done.module.scss';

const Done = () => (
  <div className={Style.AllDone}>
    <div className={Style.AllDone__ChekBlock}>
      <input type="checkbox" name="check" className={Style.AllDone__Input} />
    </div>
    <p className={Style.AllDone__Title}>Все задачи выполнены</p>
  </div>
);

export default Done;
