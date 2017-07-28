/* eslint-env browser */

import 'normalize.css'
import './index.css'

import Demo from './Demo.js'

import React from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById('root')
if (root) ReactDOM.render(<Demo />, root)
