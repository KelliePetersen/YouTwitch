import React, { Component } from 'react';

export class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '282121290145-c99t4l24f4pqqi8rt8vf0tdobdop6hd4.apps.googleusercontent.com',
        scope: 'client'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get()});
        this.auth.isSignedIn.listen(this.onAuthChange);
      }).catch((err) => {
        console.log(err);
      });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>No idea</div>
    } else if (this.state.isSignedIn) {
      return <div>Signed in</div>
    } else {
      return <div>Not signed in</div>
    }
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

export default GoogleAuth;
