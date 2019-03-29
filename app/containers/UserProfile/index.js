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
} from 'containers/App/selectors';
import Section from './Section';
import Header from '../../components/Header';
import P from './P';
import A from './A';
import Img from './Img';
import Wrapper from './Wrapper';
import LinkWrapper from './LinkWrapper';
import saga from '../HomePage/saga';
import FollowersList from '../../components/FollowersList';

/* eslint-disable react/prefer-stateless-function */
export class UserProfile extends React.PureComponent {
  render() {
    const { followers, profile } = this.props;
    const followersListProps = {
      followers,
    };
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="HCW Grabhub application homepage" />
        </Helmet>
        <Header profile />
        <div>
          <Section>
            <Wrapper>
              <Img src={profile.avatar_url} alt="Profile Headshot" />
              <P>{profile.login}</P>
              <LinkWrapper>
                <A href={profile.html_url} target="_blank">
                  GitHub Profile
                </A>
              </LinkWrapper>
              <P>Followers</P>
              <FollowersList {...followersListProps} />
            </Wrapper>
          </Section>
        </div>
      </article>
    );
  }
}

UserProfile.propTypes = {
  profile: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  followers: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
  followers: makeSelectFollowers(),
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
