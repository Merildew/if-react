import React from 'react';
import SearchForm from './SearchForm';

function TopPanel(){
    return(
            <div className="top-panel">
            <h1>Discover stay <br/>to live, work or just relax</h1>
            <SearchForm/>
        </div>
    );
}

export default TopPanel;