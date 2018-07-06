import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Component from './Component'
import App from './app'

const state = {
	fortune: null
}

ReactDOM.render(
	<Component inititalState={state}>{App}</Component>,
	document.getElementById('app')
)
