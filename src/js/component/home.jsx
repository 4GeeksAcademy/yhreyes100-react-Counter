import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types';
//import Clock from '../../js/component/Clock.jsx';
//create your first component

const Home=(props)=>{
    return (
        <div>
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
        </div>
    );
}

export default Home;
