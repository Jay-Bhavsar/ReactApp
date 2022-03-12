import React from 'react';
import {Link} from 'react-router-dom';

export  function ACD() {
  return (
      <>
    <div>
      <h1>This is an Admin Page.Only Auth People can see this</h1>
    </div>
    <a href="/logout"><button type="submit" class="btn btn-danger">Logout</button></a>
    </>
  )
}
