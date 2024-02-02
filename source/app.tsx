// App.tsx
import React from 'react'
import { Box, useInput, useApp } from 'ink'
import Menu from './components/Menu.js'
import Content from './components/Content.js'

export default function App() {
	const { exit } = useApp()
 
	useInput((input, key) => {
	  if (input === "q" || key.escape) {
		exit()
	  }
	})

    return (
		<Box width="100%" height="100%" flexDirection='row' flexGrow={1}>
			<Menu />
			<Content />
		</Box>
    )
}
