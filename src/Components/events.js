import React, { Component } from 'react'
import { connect } from 'react-redux'

import Eventlist from './eventlist'

class events extends Component {
 
  render() {
    console.log(this.props)
    const event = this.props.event ? (
      <div className="event center-align ">
        <h2 className="center-align"><b>{this.props.event.title}</b></h2>
        {this.props.event.collab  ? (<h6>In collaboration with {this.props.event.collab}</h6>):(<p/>)}
        <div className="details container">
        <h4 className="center-align">Details</h4>
        {this.props.event.day  ? (<div><p><b>Date</b></p><p>{this.props.event.day}</p></div>):(<p/>)}
        {this.props.event.time  ? (<div><p><b>Time</b></p><p>{this.props.event.time[0]}</p><p>{this.props.event.time[1]}</p><p>{this.props.event.time[2]}</p></div>):(<p></p>)}
        {this.props.event.venue ? (<div><p><b>Venue</b></p><p>{this.props.event.venue}</p></div>):(<p/>)}
        {this.props.event.team  ? (<div><p><b>Team</b></p><p>{this.props.event.team}</p></div>):(<p/>)}
        {this.props.event.coordinator  ? (<div><p><b>Co-ordinators</b></p><p>{this.props.event.coordinator[0]}</p><p>{this.props.event.coordinator[1]}</p><p>{this.props.event.coordinator[2]}</p></div>):(<p/>)}
        {this.props.event.faculty  ? (<div><p><b>Faculty Co-ordinators</b></p><p>{this.props.event.faculty[0]}</p><p>{this.props.event.faculty[1]}</p><p>{this.props.event.faculty[2]}</p></div>):(<p/>)}
        </div>
        <div className="instructions container">
        <h4 className="center-align">Instructions</h4>
        <Eventlist rules={this.props.event.rules} />
        </div>
      </div>
    ) : (
      <div className="center">Loading event...</div>
    );

    return (
      <div className="container">
        {event}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.event_id;
  return {
    event: state.events.find(event => event.id === id)
  }
}

export default connect(mapStateToProps)(events)