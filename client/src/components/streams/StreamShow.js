import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

export class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading the stream...</div>
    }
    return (
      <div>
        Video of {this.props.stream.title}
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
