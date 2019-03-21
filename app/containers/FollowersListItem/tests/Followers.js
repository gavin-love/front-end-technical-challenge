import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Followers from '../Followers';

describe('<Followers />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(<Followers />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should have a className attribute', () => {
    const wrapper = mount(<Followers />);
    const renderedComponent = enzymeFind(wrapper, Followers);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const wrapper = mount(<Followers id={id} />);
    const renderedComponent = enzymeFind(wrapper, Followers);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const wrapper = mount(<Followers attribute="test" />);
    const renderedComponent = enzymeFind(wrapper, Followers);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
