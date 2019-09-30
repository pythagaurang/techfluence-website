import React, { Component } from 'react'
import { connect } from 'react-redux'

import Eventlist from './eventlist'

class events extends Component {
 
  render() {
    console.log(this.props)
    const event = this.props.event ? (
      <div className="event center-align container">
        <h3 className="center-align"><b>{this.props.event.title}</b></h3>
        <h4 className="center-align">Details</h4>
        <p>Date : {this.props.event.day}</p>
        <p>Time : {this.props.event.time[0]}</p>
        <p>{this.props.event.time[1]}</p>
        <p>{this.props.event.time[2]}</p>
        <p>Venue : {this.props.event.venue}</p>
        <p>Team : {this.props.event.team}</p>
        <p>Coordinator : {this.props.event.coordinator[0]}</p>
        <p>{this.props.event.coordinator[1]}</p>
        <p>{this.props.event.coordinator[2]}</p>
        <p>Faculty Coordinator : {this.props.event.faculty[0]}</p>
        <p>{this.props.event.faculty[1]}</p>
        <p>{this.props.event.faculty[2]}</p>
        <h4 className="center-align">Instructions</h4>
        <Eventlist rules={this.props.event.rules}/>
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