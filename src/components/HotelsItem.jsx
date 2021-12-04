import React from "react";
import PropTypes from 'prop-types';

function HotelsItem(props){
  const { city, imageUrl, name, country } = props.hotel;
  return(
        <div className='homes-item' >
          <img className="homes-img" src={imageUrl} alt={name} />
          <a className="homes-link" href="#">{name}</a>
          <span className="homes-place">{city}, {country}</span>
        </div>
      );
}

HotelsItem.propTypes = {
  hotel: PropTypes.object,
};

export default HotelsItem;