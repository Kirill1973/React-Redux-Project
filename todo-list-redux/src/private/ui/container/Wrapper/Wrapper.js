import React from 'react';
import { Route } from 'react-router-dom';
import Style from './Wrapper.module.scss';
import SearchPanel from '../../components/SearchPanel';
import AddFrom from '../../components/AddForm';
import TodoList from '../../components/TodoList';
import Done from '../../components/Done';
import TodoItemDetails from '../../components/TodoItemDetails';

const Wrapper = () => (
  <div className={Style.Wrapper}>
    <div className={Style.Wrapper__Container}>
      <SearchPanel />
      <AddFrom />
      <Route path="/" component={TodoList} exact />
      <Route path="/:id" component={TodoItemDetails} exact />
      <Done />
    </div>
  </div>
);

export default Wrapper;
