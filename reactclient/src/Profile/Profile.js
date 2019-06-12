import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap/Form';
import Auth0Lock from 'auth0-lock';
import { AUTH_CONFIG } from '../Auth/auth0-variables';





class Profile extends Component {
  userProfile;


  lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, {
 
    auth: {
      responseType: 'token id_token',
      sso: false,
      scope: 'openid profile email'
    },
  });

  constructor(props) {
    super(props);
    this.state = { userProfile:{}};
   
    this.getProfile = this.getProfile.bind(this);
    this.getProfile();
  }


  getProfile(cb) {
    this.lock.on("authenticated", function (authResult) {
      // Use the token in authResult to getUserInfo() and save it if necessary
      this.getUserInfo(authResult.accessToken, function(error, profile) {
        if (error) {
          // Handle error
          console.log('get user error');
          return;
        }})})};
      

  componentWillMount() {
    this.setState({ profile: {} });
   
    if (!this.state.userProfile) {
      this.getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: this.state.userProfile });
    }
  }

  

  render() {
     const { profile } = this.state;
    return (
      <div className="container">
      <div className="profile-area">
        <h1>{profile.email}</h1>
        <Panel header="Profile">
          <img src={profile.picture} alt="profile" />
          <div>
            <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
            <h3>{profile.nickname}</h3>
          </div>
          <pre>{JSON.stringify(profile, null, 2)}</pre>
        </Panel>
      </div>
    </div>
  );
}


}

export default Profile;