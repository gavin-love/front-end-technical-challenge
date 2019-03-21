import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';
import Followers from './Followers';
import Wrapper from './Wrapper';

export class FollowersListItem extends React.PureComponent {
  render() {
    const { item } = this.props;
    const content = (
      <Wrapper>
        <Followers>{item.login}</Followers>
      </Wrapper>
    );

    return (
      <ListItem key={`followers-list-item-${item.login}`} item={content} />
    );
  }
}

FollowersListItem.propTypes = {
  item: PropTypes.object,
};

export default FollowersListItem;
