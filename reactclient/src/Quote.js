import React from "react";
import './quote.css';
import {Link} from 'react-router-dom';

const Quote = props => {
  return  (
   
    <Link to={`/projectdetails/${props.quote.id}`}>
    <div className="card">
     
<div className="card-header"> 
<h3>
Project # {props.quote.id} {props.quote.name}
</h3>
</div>

    <div className="main-description">
<p >{props.quote.description}</p>

</div>
</div>
</Link>
           
               
  
  )
};

export default Quote;