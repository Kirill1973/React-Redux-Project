import React from 'react';
import './wrapper.scss';
import SearchPanel from '../../components/search-panel';

const Wrapper = () => {
    return (
        <div className="Wrapper">
            <div className="Wrapper__Container">
                <SearchPanel />
            </div>
        </div>
    );
}

export default Wrapper;