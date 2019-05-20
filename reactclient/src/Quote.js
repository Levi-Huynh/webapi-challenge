import React from "react";
import './quote.css';
import {Link} from 'react-router-dom';

class Quote extends Component {
  constructor(props){
 super(props);

  
}

  actionDetail() {
    this.props.getActions(this.props.match.params.id);
    this.props.history.push(`/projectdetails/${this.props.quote.id}`)
  }

  render() {
  return  (
   

    <div onClick={this.actionDetail} className="card">
     
<div className="card-header"> 
<h3>
Project # {this.props.quote.id} {this.props.quote.name}
</h3>
</div>

    <div className="main-description">
<p >{this.props.quote.description}</p>

</div>
</div>

           
               
  
  )
}
}

export default Quote;
