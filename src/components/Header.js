import React, { Component } from 'react';
// import default from '../App';

class Header extends Component {
   render() {
      return (
         <div className = "container">
            <div className="row">
               <div className="col-md-10">
                  <div className="score">
                    <h1> Score: {this.props.score} | Best: {this.props.bestScore} </h1>
                  </div>
              </div>
            </div>
         </div>
      );
   }
}

export default Header;