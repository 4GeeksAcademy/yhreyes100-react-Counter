import React from "react";
import PropTypes from 'prop-types';


const Clocks=(props)=>{
   
    return (
        <div className="d-grid justify-content-center">
            <h1>{props.digitOne}</h1>
            <h1>{props.digitOne}</h1>
            <h1>{props.digitOne}</h1>
            <h1>{props.digitOne}</h1>
        </div>
    );
}
Clocks.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
  };
setInterval(function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    console.log(four, three, two, one);
    //render your react application
    counter++;
    ReactDOM.render(
        <Clocks digitOne={one} digitTwo={two} digitThree={three} digitFour={four}  />,
        document.querySelector('#app')
    );
},1000);

export default Clocks;