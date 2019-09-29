import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

// Logo
import logo from "./assets/theindex.svg";
import { connect } from "react-redux";

// actions
import { logout } from "./redux/actions/authentication";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <img src={logo} className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <NavLink to="/authors">AUTHORS</NavLink>
          </h4>
        </section>
        <div className="fixed-bottom">
          {this.props.user ? (
            <button
              className="btn btn-warning m-2 float-left"
              onClick={() => this.props.logout()}
            >
              logout {this.props.user.username}
            </button>
          ) : (
            <div>
              <Link to="/login" className="btn btn-info m-2 float-left">
                Login
              </Link>

              <Link to="/signup" className="btn btn-success m-2 float-left">
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
