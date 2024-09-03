//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types';
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";



Home.propTypes = {
    digitSix: PropTypes.string,
    digitFive: PropTypes.string,
    digitFour: PropTypes.string,
    digitThree: PropTypes.string,
    digitTwo: PropTypes.string,
    digitOne: PropTypes.string
  };

let counter=0;
const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode);
const timer =setInterval(function(){
   let res =counter.toString().split("").reverse();
    counter++;
    root.render(<Home digitOne={res[0]!=null?res[0]:"0"} digitTwo={res[1]!=null?res[1]:"0"} digitThree={res[2]!=null?res[2]:"0"} digitFour={res[3]!=null?res[3]:"0"}   digitFive={res[4]!=null?res[4]:"0"} digitSix={res[5]!=null?res[5]:"0"}  />);
   // root.render(<Home digitOne={num[0]} digitTwo={num[1]} digitThree={num[2]} digitFour={num[3]}   digitFive={num[4]} digitSix={num[5]}  />);
},1000);

//render your react application
//ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

