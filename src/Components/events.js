import React, { Component } from 'react'
import { connect } from 'react-redux'

class events extends Component {
  render() {
    console.log(this.props)
    const event = this.props.event ? (
      <div className="event">
        <h4 className="center">{this.props.event.title}</h4>
        <p>{this.props.event.body}</p>
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