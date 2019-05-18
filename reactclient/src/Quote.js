import React from "react";
import './quote.css';

const Quote = props => {
  return  (
   
    <div className="card">
     
<h3 className="card-header"> {props.quote.name}</h3>

    <div className="main-description">
<p >{props.quote.description}</p>

</div>
</div>

           
               
  
  )
};

export default Quote;
