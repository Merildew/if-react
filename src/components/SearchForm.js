import React from 'react';

function SearchForm() {
    return(
        <div className="search-from">
            <div className="search-labels">
                <label className="town-label" htmlFor="town-search">Your destination or hotel name</label>
                <label className="date-label" htmlFor="town-search">Check-in — Check-out</label>
            </div>
            <form className="search-panel" method="get" action="/" name="search-panel" id="searchPanel">
                <input id="town-search" className="search-input town-search" name="town" type="text"
                       placeholder="Destination or hotel name"/>
                <input id="date-search" className="search-input date-search" name="date" type="date"/>
                <input id="filter-button" className="search-input visitors-search" name="visitors" type="button"
                       value="Visitors"/>
                <input id="submitButton" className="search-submit" type="button" value="Search"/>
            </form>
        </div>
    );
}

export default SearchForm;