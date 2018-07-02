import React, { Component } from 'react';
//import logo from './../..//logo.svg';
import './../../App.css';
// import MiniDrawer from '../common/drawers/MiniDrawer';
import PersistantDrawer from '../common/drawers/PersistantDrawer';

class appLayout extends Component {
  render() {
    return (
      <div className="App">
        <PersistantDrawer />        
      </div>
    );
  }
}

export default appLayout;
