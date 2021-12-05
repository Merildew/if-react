import React, {Component} from 'react';
import Slider from "react-slick";
import HotelsItem from "./HotelsItem";

export default class HotelsSlider extends Component{
  constructor(props) {
    super(props);
    this.state={
      error: null,
      isLoaded: false,
      hotels: []
    };
  }

  componentDidMount() {
    fetch("https://fe-student-api.herokuapp.com/api/hotels/popular")
      .then(res => res.json())
      .then(
        (result) =>
        {
          this.setState({
            isLoaded: true,
            hotels: result
          });
        },
        (error) => {
          this.setState(
            {
              isLoaded: true,
              error
            }
          );
        }
      );
  }
  render(){
    const settingsSlider = {
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };
    const{error, isLoaded, hotels} = this.state;
    if(error){
      return <p>Error {error.message}</p>;
    } else if (!isLoaded){
      return (<p>Loading</p>);
    }else{
      return(
          <Slider{...settingsSlider}>
            {hotels.map((hotel)=>(
              <HotelsItem key={hotel.id} hotel={hotel}/>
            ))}
          </Slider>
      );}
  }
};
