import React from 'react'
import {shallow} from 'enzyme'

import {App} from '../client/components/App'

import './src/setupTests'


test('<App /> renders Header component', () => {
  const expected = 1
  const wrapper = shallow(<App />)
  expect (wrapper.find('Header').length).toEqual(expected);

})