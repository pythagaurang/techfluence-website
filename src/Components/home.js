import React,{Component} from 'react'
import image from '../Assets/image2.png'
import gec from '../Assets/geclogo.png'
import intensa from '../Assets/intensalogo.png'
import header from '../Assets/header.jpg'
import M from "materialize-css/dist/js/materialize.min.js";
import { Link, NavLink, withRouter } from 'react-router-dom';

class Home extends Component{
  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elems, {});
    }); 
  }
  render () {
  return (
    <div>
      <div className="center-align parallax-container">
      <div>
      <div className="parallax"><img src={header}></img></div>
        <img className="responsive-img title-image" src={image} />
        <div className="row">
          <div className="col s12 l2 m2 offset-l3 offset-m3 center-align white-text"><h5>Presented by</h5></div>
          <div className="col s4 l1 m2 offset-s1 right-align"><img src={gec} height="90px" /></div>
          <div className="col s2 l1 m1 white-text"><h6>and</h6></div>
          <div className="col s4 l1 m2 left-align"><img src={intensa} height="90px" /></div>
        </div>
        <div className="register-button"><a className="btn-large pink center waves-effect wavesmaroon-light"target="_blank" href="https://forms.gle/vG49Q7HFaZVjoE8b9">Register</a></div>
        </div>
      </div>
      <div className="container center-align table-div section">
        <span><h3>Schedulde</h3></span>
      <table className="highlight centered schedulde ">   
      <thead></thead>
      <tbody></tbody>
        <tbody>
          <tr height="22px">
            <td width="36.2667px height: 22px;">&nbsp;Day</td>
            <td width="136.733px height: 22px;">&nbsp;Location</td>
            <td width="86px; height=22px;">9</td>
            <td width="100px" height="22px">10</td>
            <td width="86px" height="22px">11</td>
            <td width="86px" height="22px">12</td>
            <td width="85px" height="22px">13</td>
            <td width="86px" height="22px">14</td>
            <td width="86px" height="22px">15</td>
            <td width="86px" height="22px">16</td>
          </tr>
            <tr height="22px">
            <td width="36.2667px" height="22px">&nbsp;1</td>
            <td width="136.733px" height="22px">&nbsp;IT Auditorium</td>
            <td width="272px" height="22px" colSpan="3">&nbsp;&nbsp; <a>Inaugration Ceremony</a></td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="85px" height="22px">&nbsp;</td>
            <td width="258px" height="22px" colSpan="3">&nbsp;&nbsp;<NavLink exact to='/events/10'>GitHub Pages Session</NavLink></td>
          </tr>
          <tr height="22px">
            <td width="36.2667px" height="22px">&nbsp;</td>
            <td width="136.733px" height="22px">&nbsp;Mining Auditorium</td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="615px" height="22px" colSpan="7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <NavLink exact to='/events/1'>UXplorer - Session</NavLink></td>
          </tr>
          <tr height="22px">
            <td width="36.2667px" height="22px">&nbsp;</td>
            <td width="136.733px" height="22px">&nbsp;Tech Zone Lab</td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="100px" heigh="22px">&nbsp;</td>
            <td width="515px" height="22px" colSpan="6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <NavLink exact to='/events/2'>Invasion</NavLink></td>
          </tr>
          <tr height="22px">
            <td width="36.2667px" height="22px">&nbsp;</td>
            <td width="136.733px" height="22px">&nbsp;IT Department</td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="100px" heigh="22px">&nbsp;</td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="343px" height="22px" colSpan="4">&nbsp;&nbsp;&nbsp;<NavLink exact to='/events/6'>Forager</NavLink></td>
          </tr>
          <tr height="22px">
            <td width="36.2667px" height="22px">&nbsp;2</td>
            <td width="136.733px" height="22px">&nbsp;Fundamentals Lab</td>
            <td width="529px" height="22px" colSpan="6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <NavLink exact to='/events/1'>UXplorer - Competition</NavLink></td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="86px" height="22px">&nbsp;</td>
          </tr>
          <tr height="9px">
            <td width="36.2667px" height="9px">&nbsp;</td>
            <td width="136.733px" height="9px">&nbsp;IT Library</td>
            <td width="86px" height="9px">&nbsp;</td>
            <td width="100px" height="9px">&nbsp;</td>
            <td width="86px" height="9px">&nbsp;</td>
            <td width="86px" height="9px">&nbsp;</td>
            <td width="171px" height="9px" colSpan="2">&nbsp;<NavLink exact to='/events/4'>Let&nbsp; The Design Speak</NavLink></td>
            <td width="86px" height="9px">&nbsp;</td>
            <td width="86px" height="9px">&nbsp;</td>
          </tr>
          <tr height="22px">
            <td width="36.2667px" height="22px">&nbsp;</td>
            <td width="136.733px" height="22px">&nbsp;CT - I</td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="100px" heigh="22px">&nbsp;<NavLink exact to='/events/7'>Photography</NavLink></td>
            <td width="86px" height="22px">&nbsp;<NavLink exact to='/events/8'>Meme on IT</NavLink></td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="85px" height="22px">&nbsp;</td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="86px" height="22px">&nbsp;</td>
          </tr>
          <tr height="22px">
            <td width="36.2667px" height="22px">&nbsp;</td>
            <td width="136.733px" height="22px">&nbsp;Tech Zone</td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="100px" heigh="22px">&nbsp;</td>
            <td width="343px" height="22px" colSpan="4">
            <NavLink exact to='/events/3'>Code IT</NavLink>
            </td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="86px" height="22px">&nbsp;</td>
          </tr>
          <tr height="22px">
            <td width="36.2667px" height="22.6834px">&nbsp;</td>
            <td width="136.733px" height="22.6834px">IT Auditorium</td>
            <td width="86px" height="22.6834px" colSpan="4">&nbsp;&nbsp;&nbsp;<NavLink exact to='/events/9'> Spark AR Session</NavLink></td>
            <td width="86px" height="22.6834px">&nbsp;</td>
            <td width="86px" height="22.6834px">&nbsp;</td>
            <td width="86px" height="22.6834px" colSpan="2">&nbsp;<a>Valedictory</a></td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  )
  }
}

export default Home