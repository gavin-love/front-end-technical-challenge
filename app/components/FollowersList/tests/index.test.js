import { shallow } from 'enzyme';
import React from 'react';

import FollowersListItem from 'containers/FollowersListItem';
import List from 'components/List';
import FollowersList from '../index';

describe('<FollowersList />', () => {
  it('should render the followers if loading was successful', () => {
    const followers = [
      {
        owner: {
          login: 'mxstbr',
        },
        html_url: 'https://github.com/react-boilerplate/react-boilerplate',
        name: 'react-boilerplate',
        open_issues_count: 20,
        full_name: 'react-boilerplate/react-boilerplate',
      },
    ];
    const renderedComponent = shallow(
      <FollowersList followers={followers} error={false} />,
    );

    expect(
      renderedComponent.contains(
        <List items={followers} component={FollowersListItem} />,
      ),
    ).toEqual(true);
  });

  it('should not render anything if nothing is provided', () => {
    const renderedComponent = shallow(
      <FollowersList followers={false} error={false} loading={false} />,
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
