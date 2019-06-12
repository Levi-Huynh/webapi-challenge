
import React, {Component} from 'react';
import Auth0Lock from 'auth0-lock';
import {ControlLabel, Panel, Glyphicon} from 'react-bootstrap/Form'
import { AUTH_CONFIG } from './auth0-variables';

const auth = new Auth();


class Auth extends Component {




  constructor(props) {
    super(props);
    this.state={userprofile:{}}
    // ...
    this.getProfile = this.getProfile.bind(this);
  }

  handleAuthentication = ({location}) => {
    if (/access_token|id_token|error/.test(location.hash)) {
      auth.handleAuthentication();
    }
  }
  

  getProfile(cb) {
    this.auth0.client.userInfo(this.accessToken, (err, profile) => {
      if (profile) {
     this.setState({userProfile : profile});
      }
      cb(err, profile);
    });
  }
  
  logout() {
    // ...
  
    // Remove user profile
    this.userProfile = null;
  
    // ...
  }

  componentWillMount() {
  
 
    if (this.state.userProfile) {
      this.getProfile((err, profile) => {
        this.setState({ userProfile: profile });
      });
    } else {
      // this.setState({  userProfile: profile}); 
     console.log('could not CWM user state');
    }
  }

  render() {
    const { profile } = this.state;
    return (
      <>
      <div className="container">
        <div className="profile-area">
          {/* <h1>{profile.email}</h1> */}
          <Panel header="Profile">
            {/* <img src={profile.picture} alt="profile" /> */}
            <div>
              <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
              {/* <h3>{profile.nickname}</h3> */}
            </div>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
          </Panel>
        </div>
      </div>
      </>
    );
  }

}

export default Auth;