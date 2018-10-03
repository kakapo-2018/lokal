import React from 'react'
import {shallow} from 'enzyme'

import {Header} from '../client/components/Header'


import './src/setupTests'


test('<Header /> ', () => {
  const expected = 3
  const wrapper = shallow(<Header />)
  expect (wrapper.find('Link').length).toEqual(expected);

})