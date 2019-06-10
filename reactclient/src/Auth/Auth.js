// src/Auth/Auth.js

import history from '../history';
import auth0 from 'auth0-js';
// ...
export default class Auth {
  accessToken;
  idToken;
  expiresAt;

  // ...


  auth0 = new auth0.WebAuth({
    domain: 'dev2911.auth0.com',
    clientID: 'owNQBAlvCFqaOBIzQIHmciIvW2EYuBFn',
    redirectUri: 'https://project-task-planner.herokuapp.com',
    responseType: 'token id_token',
    scope: 'openid'
  });

  constructor() {
    if (localStorage.getItem("accessToken") && localStorage.getItem("idToken") && localStorage.getItem("expiresAt")) {
        console.log("Auth.js.constructor() IF - Data found in the localStorage");
        this.accessToken = localStorage.getItem("accessToken");
        this.idToken = localStorage.getItem("idToken");
        this.expiresAt = localStorage.getItem("expiresAt");
      }
      else {
        console.log("Auth.js.constructor() ELSE - No data found in the localstorage ELSE");
      }
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
      this.handleAuthentication = this.handleAuthentication.bind(this);
      this.isAuthenticated = this.isAuthenticated.bind(this);
      this.getAccessToken = this.getAccessToken.bind(this);
      this.getIdToken = this.getIdToken.bind(this);
      this.renewSession = this.renewSession.bind(this);
    
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        history.replace('/home');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }


  getAccessToken() {
    return this.accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    console.log("Auth.js.setSession() called with : authResult ->", authResult);
    localStorage.setItem('isLoggedIn', 'true');

    // Set the time that the Access Token will expire at
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    localStorage.setItem("accessToken", authResult.accessToken);
    localStorage.setItem("idToken", authResult.idToken);
    localStorage.setItem("expiresAt", (new Date().getTime() / 1000) + authResult.expiresIn);
    localStorage.setItem("isLoggedIn", true);

    // navigate to the home route
    history.replace('/home');
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
       if (authResult && authResult.accessToken && authResult.idToken) {
         this.setSession(authResult);
       } else if (err) {
         this.logout();
         console.log(err);
         alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
       }
    });
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');

    this.auth0.logout({
      returnTo: window.location.origin
    });

    // navigate to the home route
    history.replace('/home');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}