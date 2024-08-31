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
        <div className="container-fluid">
            <div className="row  justify-content-center">
            <div className="col"><h1>{props.digitFour}</h1></div>
            <div className="col"><h1>{props.digitThree}</h1></div>
            <div className="col"><h1>{props.digitTwo}</h1></div>
            <div className="col"><h1>{props.digitOne}</h1></div>
            </div>
        </div>
    );
}

Home.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
  };

let counter=0;
const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode);
const num = [0,0,0,0];
function RestNumber(number){
    let res = number.toString();
    if(res[3]!=null){
        num[3]=parseInt(res[0])
        num[2]=parseInt(res[1])
        num[1]=parseInt(res[2])
        num[0]=parseInt(res[3])
    }
    else if(res[2]!=null){
        num[2]=parseInt(res[0])
        num[1]=parseInt(res[1])
        num[0]=parseInt(res[2])
    }
    else if(res[1]!=null){
        num[1]=parseInt(res[0])
        num[0]=parseInt(res[1])
    }
    else {
        num[0]=parseInt(res[0])
    }
}
setInterval(function(){
   RestNumber(counter);
    counter++;
    root.render(<Home digitOne={num[0]} digitTwo={num[1]} digitThree={num[2]} digitFour={num[3]}  />);
},1000);

//render your react application
//ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

