import React from 'react'
import fortuneCookie from 'fortune-cookie'
import style from './app.css.js'
import logo from './forcok.png'

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max))
}

console.log({ fortuneCookie })

const App = ({ state, setState }) => {
	const getFortune = () => {
		const number = getRandomInt(fortuneCookie.length - 1)
		return {
			fortune: fortuneCookie[number]
		}
	}

	return (
		<div style={style.root}>
			<img height="100" src={logo} alt="fortune-cookie logo" />
			<h1>Fortune Cookie</h1>
			<div
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'content',
					display: 'flex',
					flexDirection: 'column'
				}}
			>
				{state.fortune ? (
					<h3 className="mh2 fw1 ba pa4 br2 bg-green">{state.fortune}</h3>
				) : null}

				<button
					style={style.button}
					onClick={() => {
						setState(getFortune)
					}}
				>
					Get Fortune
				</button>
				<p className="instructions">Click button to get fortune</p>
			</div>
		</div>
	)
}

export default App
