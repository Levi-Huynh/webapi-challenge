import React from 'react';

import './quote.css';
import {connect} from 'react-redux';

const Action  = props => {
  
return (
   
<div className="card">
<h3 className="card-header">
<p>Task # {props.action.id}</p>
{props.action.description}
</h3>

<div className="main-description">
<p>{props.action.notes}</p>
</div>
</div>

        )
    };


    export default Action;