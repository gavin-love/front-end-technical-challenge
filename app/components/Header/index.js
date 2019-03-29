import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import HeaderWrapper from './HeaderWrapper';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    if (this.props.profile) {
      return (
        <HeaderWrapper profile>
          <NavBar>
            <HeaderLink to="/">
              <FormattedMessage {...messages.home} />
            </HeaderLink>
          </NavBar>
        </HeaderWrapper>
      );
    }
    return (
      <HeaderWrapper>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
        </NavBar>
      </HeaderWrapper>
    );
  }
}

export default Header;
