import React from 'react'
import {render} from '@testing-library/react'
import loadable from 'react-loadable'
import Calculator from '../calculator'

// (1) This calculator component is using "loadable" which is a dependency used to lazy-load components
// The following unit test is rendering the Calculator component, but if we inspect this component we will find that is just rendering a "Loading..." text
// How can we get the targeted component? (after being loaded)

// (2) First we need to make our test to work asynchronously...
test('renders', async () => {
  // (3) So that we can preload all the components beforehand like this:
  await loadable.preloadAll()
  render(<Calculator />)
})
