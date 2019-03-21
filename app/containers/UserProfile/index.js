/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectProfile,
  makeSelectFollowers,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
// import List from 'components/List';
import Section from './Section';
import saga from '../HomePage/saga';

/* eslint-disable react/prefer-stateless-function */
export class UserProfile extends React.PureComponent {
  render() {
    const { loading, error, followers, profile } = this.props;
    console.log(profile);
    const followersListProps = {
      loading,
      error,
      followers,
    };
    console.log(followersListProps);

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="HCW Grabhub application homepage" />
        </Helmet>
        <div>
          <Section>
            {/* <a href="/userprofile">{profile.name}</a> */}
            {/* <List items={profile} component={UserProfile} />; */}
          </Section>
        </div>
      </article>
    );
  }
}

UserProfile.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  profile: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  followers: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
  followers: makeSelectFollowers(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withSaga,
  withConnect,
)(UserProfile);
