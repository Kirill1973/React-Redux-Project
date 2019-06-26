import React from 'react';
import Style from './Wrapper.module.scss';
import SearchPanel from '../../components/SearchPanel';
import AddFrom from '../../components/AddForm';
import TodoList from '../../components/TodoList';
import Done from '../../components/Done';

const Wrapper = () => (
  <div className={Style.Wrapper}>
    <div className={Style.Wrapper__Container}>
      <SearchPanel />
      <AddFrom />
      <TodoList />
      <Done />
    </div>
  </div>
);

export default Wrapper;
