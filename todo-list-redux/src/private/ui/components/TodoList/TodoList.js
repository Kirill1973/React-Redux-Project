import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { asyncActionTodoList } from '../../../engine/core/todoData/saga/asyncAction';
import Spinner from '../Spinner';
import Style from './TodoList.module.scss';
import RenderTodoListData from '../RenderTodoListData';
import ErrorIndicator from '../ErrorIndicator';

const mapStateToProps = state => ({
  data: state.todoListData.get('todoListArray'),
  searchTerm: state.todoListData.get('searchTerm'),
  loading: state.todoListData.get('loading'),
  error: state.todoListData.get('error'),
});

const mapDispatchToProps = {
  getData: asyncActionTodoList.getDataAsync,
  removeItem: asyncActionTodoList.removeItemAsync,
  onToggleProperties: asyncActionTodoList.onTogglePropertiesAsync,
  onEditItem: asyncActionTodoList.editItemAsync,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default class TodoList extends Component {
  componentDidMount() {
    const { getData, data } = this.props;
    if (data.length === 0) {
      setTimeout(() => (getData()), 2000);
    }
  }

  searchItem = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }
    return arr.filter(item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
  };

  filterItems = (arr) => {
    const importantItems = arr.filter(item => item.important === true && item.done === false);
    const doneItems = arr.filter(item => item.done === true && item.important === false);
    const simpleItems = arr.filter(item => item.important === false && item.done === false);
    const doneAndImportantItems = arr.filter(item => item.done === true && item.important === true);
    return [...importantItems, ...simpleItems, ...doneAndImportantItems, ...doneItems];
  };

  render() {
    const {
      data, removeItem, onToggleProperties, searchTerm, onEditItem, loading, error,
    } = this.props;
    const visibleArrData = this.filterItems(this.searchItem(data, searchTerm));
    if (error.length > 0) {
      return <ErrorIndicator />;
    }
    if (visibleArrData && !loading) {
      return (
        <RenderTodoListData
          removeItem={removeItem}
          onToggleProperties={onToggleProperties}
          onEditItem={onEditItem}
          visibleArrData={visibleArrData}
        />
      );
    }
    return (
      <div className={Style.Spinner}>
        <Spinner />;
      </div>
    );
  }
}

TodoList.propTypes = {
  data: PropTypes.array,
  searchTerm: PropTypes.string,
  getData: PropTypes.func,
  removeItem: PropTypes.func,
  onToggleProperties: PropTypes.func,
  onEditItem: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string,
};
