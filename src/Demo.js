/* eslint-env browser, es6 */

import './Demo.css'

import Applet from './components/Applet.js'

import React from 'react'

const DemoApplet = () => (
	<div className="cs-demo-applet">
		<h1>Applet</h1>
		<Applet />
	</div>
)

const Demo = () => (
	<div className="cs-demo">
		<DemoApplet />
	</div>
)

export default Demo
