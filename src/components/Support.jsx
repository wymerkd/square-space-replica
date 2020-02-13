import React from 'react';
import Header from './Header';

function Support(){
  var testStyleTwo = {
    color: 'red'
  }
  return(
    <div>
      <Header/>
      <div style={testStyleTwo}>
        <h1>Testing Testing</h1>
      </div>
    </div>
  );
}

export default Support;
