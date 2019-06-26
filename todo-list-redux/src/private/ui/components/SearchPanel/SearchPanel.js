import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Style from './SearchPanel.module.scss';

const SearchPanel = () => (
  <div className={Style.AppHeader}>
    <h1 className={Style.AppHeader__Title}>Планировщик задач</h1>
    <div className={Style.AppHeader__SearchPanel}>
      <input placeholder="Поиск" className={Style.AppHeader__SearchInput} />
      <FontAwesomeIcon icon={faSearch} className={Style.AppHeader__SearchIcon} />
    </div>
  </div>
);

export default SearchPanel;
