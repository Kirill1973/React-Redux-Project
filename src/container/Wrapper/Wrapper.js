import React, { Component } from 'react';
import Style from './Wrapper.module.scss';
import SearchPanel from '../../components/SearchPanel';
import AddFrom from '../../components/AddForm';
import TodoList from '../../components/TodoList';
import TodoData from '../../_helpers/siteData/tododata.json';
import Done from '../../components/Done';

export default class Wrapper extends Component {
    maxId = 5;

    state = {
      arrTodoData: TodoData.cardsData,
      term: '',
    };

    onSearchChange = (term) => {
      this.setState({ term });
    };

    deleteItem = (id) => {
      const { arrTodoData } = this.state;
      const idx = arrTodoData.findIndex(item => item.id === id);
      const newArr = [...arrTodoData.slice(0, idx), ...arrTodoData.slice(idx + 1)];
      this.setState({ arrTodoData: newArr });
    };

    onToggleDone = (id) => {
      const { arrTodoData } = this.state;
      const resultArr = this.toggleValue(id, arrTodoData, 'done');
      this.setState({ arrTodoData: resultArr });
    };

    toggleValue = (id, arr, propName) => {
      const idx = arr.findIndex(item => item.id === id);
      const item = arr[idx];
      const newItem = { ...item, [propName]: !item[propName] };
      return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    };

    onToggleImportant = (id) => {
      const { arrTodoData } = this.state;
      const resultArr = this.toggleValue(id, arrTodoData, 'important');
      this.setState({ arrTodoData: resultArr });
    };

    allItemsDone = () => {
      const { arrTodoData } = this.state;
      const DoneArr = arrTodoData.filter(item => item.done === true);
      const notDoneArr = arrTodoData.filter(item => item.done === false);
      for (let i = 0; i < notDoneArr.length; i += 1) {
        notDoneArr[i].done = !notDoneArr[i].done;
      }
      if (notDoneArr.length === 0) {
        for (let i = 0; i < DoneArr.length; i += 1) {
          DoneArr[i].done = !DoneArr[i].done;
        }
      }
      const newArr = [...DoneArr, ...notDoneArr];
      this.setState({ arrTodoData: newArr });
    };

    onToggleEdit = (id) => {
      const { arrTodoData } = this.state;
      const idx = arrTodoData.findIndex(item => item.id === id);
      const item = arrTodoData[idx];
      item.edit = !item.edit;
      const newArr = [...arrTodoData.slice(0, idx), item, ...arrTodoData.slice(idx + 1)];
      this.setState({ arrTodoData: newArr });
    };

    onEdit = (id, text) => {
      const { arrTodoData } = this.state;
      const idx = arrTodoData.findIndex(item => item.id === id);
      const item = arrTodoData[idx];
      if (text.length === 0) {
        return;
      }
      item.label = text;
      const newArr = [...arrTodoData.slice(0, idx), item, ...arrTodoData.slice(idx + 1)];

      this.setState({ arrTodoData: newArr });
    };

    filter = (items) => {
      const doneAndImportantElems = items.filter(item => item.important === true && item.done === true);
      const firstElemes = items.filter(item => item.important === true && item.done === false);
      const middleElemes = items.filter(item => item.done === false && item.important === false);
      const lastElemes = items.filter(item => item.done === true && item.important === false);
      if (doneAndImportantElems) {
        return [...firstElemes, ...middleElemes, ...doneAndImportantElems, ...lastElemes];
      }
      return [...firstElemes, ...middleElemes, ...lastElemes];
    };

    onAdd = (text) => {
      const { arrTodoData } = this.state;
      const itemObj = {
        label: text, id: this.maxId++, important: false, done: false, edit: false,
      };
      if (text.length === 0) {
        return;
      }
      const newArr = [itemObj, ...arrTodoData];
      this.setState({ arrTodoData: newArr });
    };

    search = (items, term) => {
      if (term.length === 0) {
        return items;
      }
      return items.filter(item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
    };

    render() {
      const { arrTodoData, term } = this.state;
      const visibleItem = this.filter(this.search(arrTodoData, term));
      const visibleItem2 = 'hello';
      return (
        <div className={Style.Wrapper}>
          <div className={Style.Wrapper__Container}>
            <SearchPanel onSearchChange={this.onSearchChange} />
            <AddFrom onAdd={this.onAdd} />
            <TodoList
              todoData2={visibleItem2}
              todoData={visibleItem}
              onToggleEdit={this.onToggleEdit}
              onDelete={this.deleteItem}
              onToggleDone={this.onToggleDone}
              onToggleImportant={this.onToggleImportant}
              onEdit={this.onEdit}
            />
            <Done onAllItemDone={this.allItemsDone} />
          </div>
        </div>
      );
    }
}
