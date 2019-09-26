import React from 'react'
import image from '../Assets/image1.png'
import gec from '../Assets/geclogo.jpg'
import intensa from '../Assets/intensalogo.jpg'
const Home = (props) => {

  return (
    <div>
      <div className="center-align container">
        <img className="responsive-img" src={image} />
        <div className="row">
          <div className="col s12 l2 m2 offset-l3 offset-m2 "><h6>Presented by</h6></div>
          <div className="col s12 l1 m2 "><img src={gec} height="50px" /></div>
          <div className="col s12 l1 m1 "><h6>and</h6></div>
          <div className="col s12 l1 m2 "><img src={intensa} height="50px" /></div>
        </div>
        <a className="btn-large indigo darken-3 center" target="_blank" href="https://forms.gle/vG49Q7HFaZVjoE8b9">Register</a>
      </div>
      <table className="highlight centered table-status-sheet hide-on-med-and-down"> 
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
          </tr>`
<tr height="22px">
            <td width="36.2667px" height="22px">&nbsp;1</td>
            <td width="136.733px" height="22px">&nbsp;IT Auditorium</td>
            <td width="272px" height="22px" colspan="3">&nbsp;&nbsp; Inaugration Ceremony</td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="85px" height="22px">&nbsp;</td>
            <td width="258px" height="22px" colspan="3">&nbsp;&nbsp; GitHub Pages Session</td>
          </tr>
          <tr height="22px">
            <td width="36.2667px" height="22px">&nbsp;</td>
            <td width="136.733px" height="22px">&nbsp;Mining Auditorium</td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="615px" height="22px" colspan="7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; UXplorer - Session</td>
          </tr>
          <tr height="22px">
            <td width="36.2667px" height="22px">&nbsp;</td>
            <td width="136.733px" height="22px">&nbsp;Tech Zone Lab</td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="100px" heigh="22px">&nbsp;</td>
            <td width="515px" height="22px" colspan="6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Invasion</td>
          </tr>
          <tr height="22px">
            <td width="36.2667px" height="22px">&nbsp;</td>
            <td width="136.733px" height="22px">&nbsp;IT Department</td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="100px" heigh="22px">&nbsp;</td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="343px" height="22px" colspan="4">&nbsp;&nbsp;&nbsp; Forager</td>
          </tr>
          <tr height="22px">
            <td width="36.2667px" height="22px">&nbsp;2</td>
            <td width="136.733px" height="22px">&nbsp;Fundamentals Lab</td>
            <td width="529px" height="22px" colspan="6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; UXplorer - Competition</td>
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
            <td width="171px" height="9px" colspan="2">&nbsp;Let&nbsp; The Design Speak</td>
            <td width="86px" height="9px">&nbsp;</td>
            <td width="86px" height="9px">&nbsp;</td>
          </tr>
          <tr height="22px">
            <td width="36.2667px" height="22px">&nbsp;</td>
            <td width="136.733px" height="22px">&nbsp;CT - I</td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="100px" heigh="22px">&nbsp;Photography</td>
            <td width="86px" height="22px">&nbsp;Meme on IT</td>
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
            <td width="343px" height="22px" colspan="4">
              <p>Code IT</p>
            </td>
            <td width="86px" height="22px">&nbsp;</td>
            <td width="86px" height="22px">&nbsp;</td>
          </tr>
          <tr height="22px">
            <td width="36.2667px" height="22.6834px">&nbsp;</td>
            <td width="136.733px" height="22.6834px">IT Auditorium</td>
            <td width="86px" height="22.6834px" colspan="4">&nbsp;&nbsp;&nbsp; Spark AR Session</td>
            <td width="86px" height="22.6834px">&nbsp;</td>
            <td width="86px" height="22.6834px">&nbsp;</td>
            <td width="86px" height="22.6834px" colspan="2">&nbsp; Valedictory</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home