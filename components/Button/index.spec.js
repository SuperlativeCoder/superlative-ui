import React from 'react';
import { shallow } from 'enzyme';

import Button from './index';

describe('<Button />', () => {
  it('should render text', () => {
    const wrapper = shallow(<Button>button</Button>);

    expect(wrapper.text()).toBe('button');

    expect(wrapper.is('.button')).toBeFalsy();
    expect(wrapper.is('.su-button')).toBeTruthy();
  });

  it('should update styles', () => {
    const wrapper = shallow(<Button type="primary" />);
    expect(wrapper.find('.su-button').hasClass('focus')).toBeFalsy();

    wrapper.find('.su-button').simulate('touchstart');
    expect(wrapper.find('.su-button').hasClass('focus')).toBeTruthy();

    wrapper.find('.su-button').simulate('touchend');
    expect(wrapper.find('.su-button').hasClass('focus')).toBeFalsy();
  });

  it('should not update styles', () => {
    const wrapper = shallow(<Button type="primary" disabled />);
    wrapper.find('.su-button').simulate('touchstart');
    expect(wrapper.find('.su-button').hasClass('focus')).toBeFalsy();
  });
});
