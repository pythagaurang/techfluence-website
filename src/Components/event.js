import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import arch from '../Assets/logo1.png'
import {connect} from 'react-redux'

class event extends Component{
  render() {
    console.log(this.props)
    const { events } = this.props;
    const eventList = events.length ? (
      events.map(event => {
        return(
          < div className = "event card col s12 m12 l5 offset-l1 left-align" key={event.id} >
            <img src={arch} alt="" />
            <div className="card-content">
              <Link to={'/events/' + event.id}>
                <span className="card-title">{event.title}</span>
              </Link>
            </div>
          </div>
          
        )
        })
      ) : (
        <div className="center">Error.</div>
      )
  return (
    <div>
      <div className="container home row">
        <h4 className="center">Events</h4>
        <p>{eventList}</p>
      </div>
    </div>
  )}
}
const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps)(event)
