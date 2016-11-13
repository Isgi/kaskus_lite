/*globals COURSES:true */
import React, { Component } from 'react';
import Navbar from './component/Navbar.jsx';
// import Home from './component/Home.jsx';

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
            {this.props.children}
        </div>
      </div>
    )
  }
}
