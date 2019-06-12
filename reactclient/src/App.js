import React, {Component} from 'react';
import { Navbar, Button } from 'react-bootstrap';
import {BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import './App.css';
import PostsLists from './PostsList';
import PostDetails from './PostDetails';
 import Nav from './Nav';

 import Header from './Header';
 import Top from './Top';
 import Projects from './Private';
 import Login from './Auth/login';
 import Logout from './Auth/Logout';
import Profile from './Profile/Profile';



 class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
  
   
    }
  }


  render() {
 


 return (
      <>
    
    <div>
    <Header />
    <main>
      <Switch>
         <Route exact path="/" component={Top} /> 
        <Route path="/projects" component={Projects} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route exact path= '/projectdetails/:id' component={PostDetails} {...this.props}/> 
        <Route path="/profile" component={Profile} />
      </Switch>
    </main>
  </div>

          {/* <Route path='/' component={Nav} lock={this.lock}  {...this.props}/> 
         
     <Route exact path= '/project' component={PostsLists} {...this.props}/>
     <Route exact path= '/projectdetails/:id' component={PostDetails} {...this.props}/> 
  */}

 
       </>
    )
  }
 }

export default App;



// class App extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       checkingSession: true,
//     }
//   }

//   async componentWillMount(){
//     try{
//       this.lock = new Auth0Lock('owNQBAlvCFqaOBIzQIHmciIvW2EYuBFn', 'dev2911.auth0.com');
//     }catch (err) {
//       if (err.error !== 'login_required') console.log(err.error);
//     }
//   }

//   async componentDidMount() {
//     // if (this.props.location.pathname === '/callback') {
//     //   this.setState({checkingSession:false});
//     //   return;
//     // }
  
//     try {
//       await auth0Client.silentAuth();
//       this.forceUpdate();
//     } catch (err) {
//       if (err.error !== 'login_required') console.log(err.error);
//     }
//     this.setState({checkingSession:false});
//   }

//   render() {
 


//  return (
//       <>
    

//          <div className="mainbox">
//            <Router>
//           <Route path='/' component={Nav} lock={this.lock}  {...this.props}/> 
         
//      <Route exact path= '/project' component={PostsLists} {...this.props}/>
//      <Route exact path= '/projectdetails/:id' component={PostDetails} {...this.props}/> 
//      <Route exact path='/callback' component={Callback} {...this.props}/>
//      </Router>

//        </div>
//        </>
//     )
//   }
// }

// export default App;