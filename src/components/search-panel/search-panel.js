import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './search-panel.scss';

export default class SearchPanel extends Component {
    render() {
        return (
            <div className="AppHeader">
                <h1 className="AppHeader__Title">Планировщик задач</h1>
                <div className="AppHeader__SearchPanel">
                    <input placeholder='Поиск' className="AppHeader__SearchInput"/>
                    <FontAwesomeIcon icon={faSearch} className="AppHeader__SearchIcon" />
                </div>
            </div>
        )
    }
}