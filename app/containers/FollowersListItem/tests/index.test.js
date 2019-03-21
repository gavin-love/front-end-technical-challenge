import React from 'react';
import { shallow, render } from 'enzyme';
import { IntlProvider } from 'react-intl';

import ListItem from 'components/ListItem';
import { FollowersListItem } from '../index';

const renderComponent = (props = {}) =>
  render(
    <IntlProvider locale="en">
      <FollowersListItem {...props} />
    </IntlProvider>,
  );

describe('<FollowersListItem />', () => {
  let item;

  beforeEach(() => {
    item = {
      login: 'gavin',
    };
  });

  it('should render a ListItem', () => {
    const renderedComponent = shallow(<FollowersListItem item={item} />);
    expect(renderedComponent.find(ListItem)).toHaveLength(1);
  });

  it('should render the repo name', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.text()).toContain(item.login);
  });
});
