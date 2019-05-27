import React from "react";
import { connect } from "react-redux";
import  './quote.css';
import Quote from './Quote';

const QuoteList = props => {
  if(!props.quotes){return <h1>Loading</h1>}
  return (
     
<div>

      {props.quotes.map(quote => {
        return <Quote key={quote.name} quote={quote} />;
      })}

 </div>
  );
};

export default QuoteList;

  