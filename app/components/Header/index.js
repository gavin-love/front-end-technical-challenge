import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import HeaderWrapper from './HeaderWrapper';
import H1 from '../H1';
import Span from './Span';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <H1 primaryHeader>
          <Span>&lsaquo;&bull;&bull;&bull;&rsaquo;</Span>
          Grabhub
        </H1>
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
