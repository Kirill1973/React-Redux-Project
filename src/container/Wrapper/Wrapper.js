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
    }

    onSearchChange = (term) => {
      this.setState({ term });
    }

    deleteItem = (id) => {
      this.setState(({ arrTodoData }) => {
        const idx = arrTodoData.findIndex(item => item.id === id);
        const newArr = [...arrTodoData.slice(0, idx), ...arrTodoData.slice(idx + 1)];
        return {
          arrTodoData: newArr,
        };
      });
    }

    onToggleDone = (id) => {
      this.setState(({ arrTodoData }) => {
        const idx = arrTodoData.findIndex(item => item.id === id);
        const item = arrTodoData[idx];
        item.done = !item.done;
        const newArr = [...arrTodoData.slice(0, idx), item, ...arrTodoData.slice(idx + 1)];
        return {
          arrTodoData: newArr,
        };
      });
    }

    onToggleImportant = (id) => {
      this.setState(({ arrTodoData }) => {
        const idx = arrTodoData.findIndex(item => item.id === id);
        const item = arrTodoData[idx];
        item.important = !item.important;
        const newArr = [...arrTodoData.slice(0, idx), item, ...arrTodoData.slice(idx + 1)];
        return {
          arrTodoData: newArr,
        };
      });
    }

    allItemsDone = () => {
      this.setState(({ arrTodoData }) => {
        const arr = arrTodoData;
        for (let i = 0; i < arr.length; i += 1) {
          arr[i].done = true;
        }
        return {
          arrTodoData: arr,
        };
      });
    }

    filter = (items) => {
      const firstElemes = items.filter(item => item.important === true);
      const middleElemes = items.filter(item => item.done === false && item.important === false);
      const lastElemes = items.filter(item => item.done === true);
      return [...firstElemes, ...middleElemes, ...lastElemes];
    }

    onAdd = (text) => {
      const itemObj = {
        label: text, id: this.maxId++, important: false, done: false,
      };
      if (text.length === 0) {
        return;
      }
      this.setState(({ arrTodoData }) => {
        const newArr = [itemObj, ...arrTodoData];
        return { arrTodoData: newArr };
      });
    }

    search = (items, term) => {
      if (term.length === 0) {
        return items;
      }
      return items.filter(item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
    }

    render() {
      const { arrTodoData, term } = this.state;
      const visibleItem = this.filter(this.search(arrTodoData, term));
      return (
        <div className={Style.Wrapper}>
          <div className={Style.Wrapper__Container}>
            <SearchPanel onSearchChange={this.onSearchChange} />
            <AddFrom onAdd={this.onAdd} />
            <TodoList todoData={visibleItem} onDelete={this.deleteItem} onToggleDone={this.onToggleDone} onToggleImportant={this.onToggleImportant} />
            <Done onAllItemDone={this.allItemsDone} />
          </div>
        </div>
      );
    }
}
