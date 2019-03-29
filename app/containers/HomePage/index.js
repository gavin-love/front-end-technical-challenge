/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectProfile,
  makeSelectFollowers,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
// import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import Button from 'components/Button';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Header from '../../components/Header';
import Img from './Img';
import BcFront from '../../images/bc-front.png';
import BcBack from '../../images/bc-back.png';
// import Section from './Section';
import HomePageWrapper from './HomePageWrapper';
import messages from './messages';
import { loadRepos, loadProfile, loadFollowers } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos, profile } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <HomePageWrapper>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="HCW Grabhub application homepage" />
        </Helmet>
        <Header />
        <div>
          <CenteredSection businessCard>
            <Img src={BcBack} alt="Business Card Back" />
            <Img src={BcFront} alt="Business Card Front" />
          </CenteredSection>
          <CenteredSection>
            <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="username">
                <FormattedMessage {...messages.trymeMessage} />
                <AtPrefix>
                  <FormattedMessage {...messages.trymeAtPrefix} />
                </AtPrefix>
                <Input
                  id="username"
                  type="text"
                  placeholder="mxstbr"
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                />
              </label>
            </Form>
            <Button
              onClick={e => {
                e.preventDefault();
                this.props.history.push('/userprofile');
              }}
            >
              {profile.login || '@ mxstbr'}
            </Button>
            <ReposList {...reposListProps} />
          </CenteredSection>
        </div>
      </HomePageWrapper>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadProfile());
      dispatch(loadRepos());
      dispatch(loadFollowers());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  profile: makeSelectProfile(),
  followers: makeSelectFollowers(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
