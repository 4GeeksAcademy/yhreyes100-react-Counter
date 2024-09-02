//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types';
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import Home from "./component/home.jsx";

const Home=(props)=>{
    return (
        <div className="container d-flex justify-content-center">
            <div className="row">
            <div className="col-2 img">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </div>    
            <div className="col-2"><b>{props.digitSix}</b></div>
            <div className="col-2"><b>{props.digitFive}</b></div>
            <div className="col-2"><b>{props.digitFour}</b></div>
            <div className="col-2"><b>{props.digitThree}</b></div>
            <div className="col-2"><b>{props.digitTwo}</b></div>
            <div className="col-2"><b>{props.digitOne}</b></div>
            </div>
        </div>
    );
}

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
setInterval(function(){
   let res =counter.toString().split("").reverse();
    counter++;
    root.render(<Home digitOne={res[0]!=null?res[0]:"0"} digitTwo={res[1]!=null?res[1]:"0"} digitThree={res[2]!=null?res[2]:"0"} digitFour={res[3]!=null?res[3]:"0"}   digitFive={res[4]!=null?res[4]:"0"} digitSix={res[5]!=null?res[5]:"0"}  />);
   // root.render(<Home digitOne={num[0]} digitTwo={num[1]} digitThree={num[2]} digitFour={num[3]}   digitFive={num[4]} digitSix={num[5]}  />);
},1000);

//render your react application
//ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

