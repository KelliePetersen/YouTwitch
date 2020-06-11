import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

export class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div><h1>Loading the stream...</h1></div>
    }
    return (
      <div>
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

const mapDispatchToProps = {
  fetchStream
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamShow);
