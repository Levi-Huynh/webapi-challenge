import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import PostsLists from './PostsList';
import PostDetails from './PostDetails';
 import Nav from './Nav';








function App (){
 return (
      
    

         <div className="mainbox">
          <Route path='/' component={Nav}/> 
         
     <Route  path= '/' component={PostsLists}/>
     <Route exact path= '/projectdetails/:id' component={PostDetails}/> 



       </div>
       
    )
  }

export default App;