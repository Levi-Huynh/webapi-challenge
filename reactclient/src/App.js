import React, {Component} from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import PostsLists from './PostsList';
import PostDetails from './PostDetails';

function App() {
  return (
    <div className="mainbox">
  <Route path= '/' component={PostsLists}/>
  <Route path= '/projectdetails/:id' component={PostDetails}/>
    </div>
  );
}

export default App;
