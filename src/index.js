import React from 'react'
import { render } from 'react-dom'
import App from './containers/app'
window.React = React
render(
	<App />,
	document.getElementById("index")
)