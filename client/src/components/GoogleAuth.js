import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "43536756671-33r4qmlnb9tshuiup0on5jvh713olftc.apps.googleusercontent.com",
          scope: "email" //Which parts of the user's profile that we want to get access to
        }) //Finish initializing our library, then...
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance(); //asign the auth instance to this.auth
          this.onAuthChange(this.auth.isSignedIn.get()); //then immediately update our state inside redux store
          this.auth.isSignedIn.listen(this.onAuthChange); //then wait the status to change at some point in the  future
        });
    });
  }

  //Change the State without refreshing the page
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
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
        <button onClick={this.onSignOutClick} className="ui blue google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui blue google button">
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
