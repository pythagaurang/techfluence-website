import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import {withRouter } from 'react-router-dom';

class Footer extends Component{
    render() {
    return (    
        <footer className="page-footer indigo darken-3">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">TechFluence 2019</h5>
              <p className="grey-text text-lighten-4"></p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">
                  Contact Us
              </h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="mailto:gecintensa@gmail.com">Email</a></li>
                <li><a className="grey-text text-lighten-3" href="https://wa.me/919011681595">Whatsapp</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Event Executive: +91 9011681595</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Intensa GS: +91 88053 76909</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2019 TechFluence
          <a className="grey-text text-lighten-4 right" href="https://github.com/pythagaurang/techfluence-website/"><i className="fab fa-github"></i> Github</a>
          </div>
        </div>
      </footer>
        
        
  )
  }
}

export default withRouter(Footer);