import React from 'react';
import { shallow } from 'enzyme';
import OriginalTracks from '../OriginalTracks';

describe('<OriginalTracks />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<OriginalTracks />);
    expect(wrapper.length).toEqual(1);
  });
});
