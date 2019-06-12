import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Style from './SearchPanel.module.scss';

export default class SearchPanel extends Component {
  state = {
    term: '',
  }

  onSearchChange = (event) => {
    const term = event.target.value;
    const { onSearchChange } = this.props;
    this.setState({ term });
    onSearchChange(term);
  }

  render() {
    const { term } = this.state;
    return (

      <div className={Style.AppHeader}>
        <h1 className={Style.AppHeader__Title}>Планировщик задач</h1>
        <div className={Style.AppHeader__SearchPanel}>
          <input placeholder="Поиск" className={Style.AppHeader__SearchInput} value={term} onChange={this.onSearchChange} />
          <FontAwesomeIcon icon={faSearch} className={Style.AppHeader__SearchIcon} />
        </div>
      </div>
    );
  }
}
