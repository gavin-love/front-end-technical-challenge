import React from 'react';
import { shallow } from 'enzyme';

import { UserProfile } from '../index';
import FollowersList from '../../../components/FollowersList';

describe('<UserProfile />', () => {
  it('should render the profile', () => {
    const renderedComponent = shallow(
      <UserProfile loading error={false} profile={[]} />,
    );
    expect(
      renderedComponent.contains(
        <FollowersList loading error={false} profile={[]} />,
      ),
    ).toEqual(true);
  });
});
