import React from "react";
import { connect } from "react-redux";
import QuoteList from './QuoteList';
// import FriendsList  from "../components/FriendsList";
// import actions
import {getData} from "./actions";


class PostsLists extends React.Component {
    constructor() {
      super();
    }
  
    componentDidMount() {
      //call our action
      this.props.getData();
    }
  
    render() {
    
   
        // return something here to indicate that you are fetching data
    
      return (
        <div >
      
           {this.props.fetchingquote? <h1>Loading</h1> : null}
        {console.log("Props", this.props.quotes)}

          <QuoteList quotes={this.props.quotes} />
          {/* <UpdateFriendContainer friends={this.props.friends}/> */}
        </div>
     
      );
    }
  }
  
  // our mapStateToProps needs to have two properties inherited from state
  // the characters and the fetching boolean
  
  const mstp = state => {
    return {
    quotes: state.quotes,
      fetchingquote: state.fetchingquote
    }
  }
  
  export default connect(
   (mstp), {getData: getData}
  )(PostsLists);
  