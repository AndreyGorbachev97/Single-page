import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        
        <ReactCSSTransitionGroup 
          transitionName="anim" 
          transitionAppear={true}
          transitionAppearTimeout={2000} 
          transitionEnter={false}
          transitionLeave={false}
        >
          <Body/>
      </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
