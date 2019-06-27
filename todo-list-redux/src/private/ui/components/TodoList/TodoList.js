import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { asyncActionTodoList } from '../../../engine/core/todoData/saga/asyncAction';
import Spinner from '../Spinner';
import Style from './TodoList.module.scss';
import RenderTasks from '../RenderTasks';

const mapStateToProps = state => ({
  data: state.todoListData.get('todoListArray'),
  searchTerm: state.todoListData.get('searchTerm'),
  loading: state.todoListData.get('success'),
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
    const { getData } = this.props;
    setTimeout(() => (getData()), 2000);
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
      data, removeItem, onToggleProperties, searchTerm, onEditItem, loading,
    } = this.props;
    const visibleArrData = this.filterItems(this.searchItem(data, searchTerm));
    if (visibleArrData && loading) {
      return (
        <div className={Style.TodoItems}>
          <ReactCSSTransitionGroup
            transitionName={{
              enter: Style.ExampleEnter,
              enterActive: Style.ExampleEnterActive,
              leave: Style.ExampleLeave,
              leaveActive: Style.ExampleLeaveActive,
            }}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {
              visibleArrData.map((item) => {
                const { id } = item;
                return (
                  <RenderTasks
                    key={id}
                    item={item}
                    removeItem={removeItem}
                    onToggleProperties={onToggleProperties}
                    onEditItem={onEditItem}
                  />
                );
              })
            }
          </ReactCSSTransitionGroup>
        </div>
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
};
