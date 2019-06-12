import React, {Component} from "react";
import {NavLink} from 'react-router-dom'
import  './Nav.css';


class Nav extends Component{
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  
  showLock(){
   this.props.lock.show();
  }

  render() {

  return (
    
<div className="wrapper">
<NavLink className="NavL" to= '/Projects' >
<i className="icon" class="far fa-edit fa-4x" >Add</i>
</NavLink>

<NavLink className="NavL" to= '/Projects' >
<i class="far fa-file-alt fa-4x">Update</i>
</NavLink>

<NavLink className="NavL" to= '/Projects' >
<i class="far fa-paper-plane fa-4x">Home</i>
</NavLink>

<NavLink cla
ssName="NavL" to= '/Projects' >
<i class="far fa-id-badge fa-4x">Refresh</i>
</NavLink>

<NavLink className="NavL" to= '/Projects' >
<i className="icon"  class="far fa-user-circle fa-4x">Account</i>
</NavLink>

<div className="login-box">
      <a onClick={this.showLock}>Sign In</a>
    </div>;


 </div>
  )
}
}

export default Nav;

  