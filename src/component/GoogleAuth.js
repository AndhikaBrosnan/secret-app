import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../redux/action/auth.js";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "970354520549-ovrdle20pl1mv41gqh7oc4ll0jbcc81i.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.profile = window.gapi.auth2
            .getAuthInstance()
            .currentUser.get()
            .getBasicProfile();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // get the basic Information
  // gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile(). [getImage(),getId(),getName()]

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.profile);
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <button
            onClick={this.onSignOutClick}
            className="ui negative basic button"
          >
            <i className="google icon"></i>
            Sign out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            onClick={this.onSignInClick}
            className="ui primary basic button"
          >
            <i className="google icon"></i>
            Sign In with Google
          </button>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
