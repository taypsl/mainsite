import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-L">
        <div>
          {/* replaced button element with div for styling purposes*/}
          <div className="refresh-M" onClick={this.props.onClick.bind(this)}>
            <i className="material-icons" style={{ fontSize: '44px' }}>
              refresh
            </i>
          </div>
        </div>
        <div>
          {/* settings icon*/}
          <div className="settings-N">
            {/* this div is providing space for the custom settings button from npm package react-burger-menu*/}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chatlog: state.chat.log,
});

const mapDispatchToProps = dispatch => ({
  onClick(event) {
    if (event.currentTarget.type !== 'button') {
      return;
    }
    dispatch({ type: 'RESET_BOT' });
    this.props.resetSession();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
