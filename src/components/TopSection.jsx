import React from 'react';
import TopPanel from './TopPanel';
import Header from './Header';

function TopSection(){
    return(
        <div className="top-section">
            <Header/>
            <TopPanel/>
        </div>
    );
}

export default TopSection;