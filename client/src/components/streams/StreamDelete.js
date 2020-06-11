import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteStream } from '../../actions';

export class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.deleteStream(this.props.match.params.id, formValues)
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3>Delete Stream</h3>
        <p>Are you sure you want to delete {this.props.stream.title}?</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id]  };
}

const mapDispatchToProps = {
  deleteStream
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamDelete);
