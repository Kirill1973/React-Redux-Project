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
      editTerm: '',
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
        return {
          arrTodoData: newArr,
        };
      });
    }

    onToggleEdit = (id) => {
      this.setState(({ arrTodoData, editTerm }) => {
        let itemValue = editTerm;
        const idx = arrTodoData.findIndex(item => item.id === id);
        const item = arrTodoData[idx];
        item.edit = !item.edit;
        itemValue = item.label;
        const newArr = [...arrTodoData.slice(0, idx), item, ...arrTodoData.slice(idx + 1)];
        return {
          arrTodoData: newArr,
          editTerm: itemValue,
        };
      });
    }

    onEdit = (id, text) => {
      this.setState(({ arrTodoData }) => {
        const idx = arrTodoData.findIndex(item => item.id === id);
        const item = arrTodoData[idx];
        if (text.length === 0) {
          return {
            arrTodoData,
          };
        }
        item.label = text;
        const newArr = [...arrTodoData.slice(0, idx), item, ...arrTodoData.slice(idx + 1)];
        return {
          arrTodoData: newArr,
        };
      });
    }

    filter = (items) => {
      const doneAndImportantElems = items.filter(item => item.important === true && item.done === true);
      const firstElemes = items.filter(item => item.important === true && item.done === false);
      const middleElemes = items.filter(item => item.done === false && item.important === false);
      const lastElemes = items.filter(item => item.done === true && item.important === false);
      if (doneAndImportantElems) {
        return [...firstElemes, ...middleElemes, ...doneAndImportantElems, ...lastElemes];
      }
      return [...firstElemes, ...middleElemes, ...lastElemes];
    }

    onAdd = (text) => {
      const itemObj = {
        label: text, id: this.maxId++, important: false, done: false, edit: false,
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
      const { arrTodoData, term, editTerm } = this.state;
      const visibleItem = this.filter(this.search(arrTodoData, term));
      return (
        <div className={Style.Wrapper}>
          <div className={Style.Wrapper__Container}>
            <SearchPanel onSearchChange={this.onSearchChange} />
            <AddFrom onAdd={this.onAdd} />
            <TodoList editTerm={editTerm} onEdit={this.onEdit} todoData={visibleItem} onToggleEdit={this.onToggleEdit} onDelete={this.deleteItem} onToggleDone={this.onToggleDone} onToggleImportant={this.onToggleImportant} />
            <Done onAllItemDone={this.allItemsDone} />
          </div>
        </div>
      );
    }
}
