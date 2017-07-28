/* eslint-env browser, mocha */
import Demo from './Demo.js'

import React from 'react'
import ReactDOM from 'react-dom'

describe('Demo', () => {

	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<Demo />, div)
	})

})
