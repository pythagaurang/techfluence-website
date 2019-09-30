import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { Link, NavLink, withRouter } from 'react-router-dom';
import logo from '../Assets/logo.png'
import logotext from '../Assets/image2.png'

class Navbar extends Component{
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        M.Sidenav.init(elem, {
            edge: "left",
            closeOnClick: true 
        });
    }

    render() {
    return (
    <header>    
    <div className="">
    <div className="navbar-fixed">
    <nav className="nav-wrapper indigo darken-2">
      <div className="container">
      <Link className="left brand" to="/">
            <img className="brand-logo circle responsive-img" src={logo} alt='logo' />
        </Link>
        <a href='#' data-target="mobile-sidebar" className="left sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to='/events'>Events</NavLink></li>
          <li><NavLink to='/rules'>Rules</NavLink></li>
        </ul>
      </div>
    </nav>
    </div>
    <ul className="sidenav collection with-header black-text" id="mobile-sidebar">
          <li><div className="indigo darken-3 valign-wrapper collection-header"><img className="logotext responsive-img" src={logotext} alt='logo' /></div></li>
          <li><NavLink className="sidenav-close collection-item" exact to="/">Home</NavLink></li>
          <li><NavLink className="sidenav-close collection-item" to='/events'>Events</NavLink></li>
          <li><NavLink className="sidenav-close collection-item"to='/rules'>Rules</NavLink></li>
    </ul>
  </div>
  </header>
        
        
  )
  }
}

export default withRouter(Navbar);