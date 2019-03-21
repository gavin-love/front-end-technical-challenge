import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import FollowersListItem from 'containers/FollowersListItem';
import Wrapper from './Wrapper';

function FollowersList({ followers }) {
  if (followers !== false) {
    return (
      <Wrapper>
        <List items={followers} component={FollowersListItem} />
      </Wrapper>
    );
  }

  return null;
}

FollowersList.propTypes = {
  followers: PropTypes.any,
};

export default FollowersList;
