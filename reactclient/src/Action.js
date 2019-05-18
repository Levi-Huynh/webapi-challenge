import React from 'react';


import {connect} from 'react-redux';

const Action  = props => {
  
return (
   
<div>
{props.action.description}
{props.action.notes}

</div>

        )
    };


    export default Action;