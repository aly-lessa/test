import React from 'react';
import PropTypes from 'prop-types';


// eslint-disable-next-line react/prefer-stateless-function
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.onClickButtonCloseProfile = this.onClickButtonCloseProfile.bind(this);
  }

  onClickButtonCloseProfile() {
    const { closeProfile } = this.props;
    closeProfile(false);
  }

  render() {
    const {
      id, avatar, email, firstName, lastName,
      company, url, text, flagProfile
    } = this.props;
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        className="profile"
        data-visible={flagProfile}
        onClick={this.onClickButtonCloseProfile}
      >
        <div className="avatar">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img src={avatar} />
        </div>
        <div className="contacts">
          <div className="name">{'Name: ' + firstName + ' ' + lastName}</div>
          <div className="email">{'Email: ' + email}</div>
        </div>
        <div className="more_info">
          <div className="company">{'Company: ' + company}</div>
          <div className="url">{'Url: ' + url}</div>
          <div className="text">{'Status: ' + text}</div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  lastName: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  flagProfile: PropTypes.bool.isRequired,
  closeProfile: PropTypes.func.isRequired
};
