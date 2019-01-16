import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../Landing';

describe('<Landing />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper.length).toEqual(1);
  });
});
