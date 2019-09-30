import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


class event extends Component{

  render() {
    const { events } = this.props;
    const eventList = events.length ? (
      events.map(event => {
        return(        
  <div class="col s12 m6 l4 ">
     <Link to={'/events/' + event.id}>
    <div class="card">
      <div class="card-image">
      <img classname="card-Image l3 " src = {require('../Assets/'+event.id+'.png')}  alt={"image:"+event.title}/>
      </div>
      <div class="card-content truncate">
        {event.shortdesc}
      </div>
      <div class="card-action">
    
      <span className="card-title orange-text lighten-1 truncate"><b>{event.title}</b></span>
      </div>
    </div>
    </Link>
  </div>
        )
        })
      ) : (
        <div className="center">Error.</div>
      )
  return (
    <div>
      <div className="container row">
        <h4 className="center">Events</h4>
        {eventList}
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
