import React from 'react';
import { shallow } from 'enzyme';
import Jammer from '../Jammer';

describe('<Jammer />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Jammer />);
    expect(wrapper.length).toEqual(1);
  });
});
