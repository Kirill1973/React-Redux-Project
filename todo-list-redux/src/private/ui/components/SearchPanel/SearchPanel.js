import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { asyncActionTodoList } from '../../../engine/core/todoData/saga/asyncAction';
import Style from './SearchPanel.module.scss';

const mapDispatchToProps = {
  searchItems: asyncActionTodoList.searchItems,
};

@connect(
  null,
  mapDispatchToProps,
)

export default class SearchPanel extends Component {
    textInput = React.createRef();

    onChange = () => {
      const { current: { value } } = this.textInput;
      const { searchItems } = this.props;
      searchItems(value.toLowerCase());
    }

    render() {
      return (
        <div className={Style.AppHeader}>
          <h1 className={Style.AppHeader__Title}>Планировщик задач</h1>
          <div className={Style.AppHeader__SearchPanel}>
            <input placeholder="Поиск" className={Style.AppHeader__SearchInput} onChange={this.onChange} ref={this.textInput} />
            <FontAwesomeIcon icon={faSearch} className={Style.AppHeader__SearchIcon} />
          </div>
        </div>
      );
    }
}
