import React from 'react';
import { shallow } from 'enzyme';
import CharacterItem from './CharacterItem';

it('renders welcome message', () => {
    const wrapper = shallow(<CharacterItem obj={{ character: 'some character', 
    image: 'some image', species: 'some species', status: 'some status'}}/>);
  
    expect(wrapper).toMatchSnapshot();
  });