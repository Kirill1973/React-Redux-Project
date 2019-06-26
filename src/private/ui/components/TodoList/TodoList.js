import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncActionWithData } from '../../../engine/core/todoData/saga/asyncAction';
import Spinner from '../Spinner';
import Style from './TodoList.module.scss';
import RenderTasks from '../RenderTasks';

const mapStateToProps = state => ({
  data: state.dataReducer.get('mainData'),
});

const mapDispatchToProps = {
  getData: asyncActionWithData.getDataAsync,
  removeItem: asyncActionWithData.removeItemAsync,
  onToggleDone: asyncActionWithData.onToggleDoneAsync,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default class TodoList extends Component {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    const { data: { cardsData }, removeItem, onToggleDone } = this.props;
    if (cardsData) {
      return (
        <div className={Style.TodoItems}>
          {
            cardsData.map((item) => {
              const { id } = item;
              return (
                <RenderTasks
                  key={id}
                  item={item}
                  removeItem={removeItem}
                  onToggleDone={onToggleDone}
                />
              );
            })
            }
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
