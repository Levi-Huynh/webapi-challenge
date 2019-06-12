import React from 'react';
import { Redirect } from 'react-router-dom';
import isAuthenticated from './Auth/isAuthenticated';
import PostsList from './PostsList';

const Projects = (props) => (
  isAuthenticated() ? (
    <div>
      <h2>Projects Page</h2>
      <p>Hey, you’re logged in!</p>
      <PostsList/>
     
    </div>
  ) : (
    <Redirect to={{
      pathname: '/login',
      state: { from: props.location }
    }} />
  )
)

export default Projects;