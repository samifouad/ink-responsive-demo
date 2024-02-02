#!/usr/bin/env node
import React from 'react'
import { render, Box } from 'ink'
import App from './app.js'

process.stdout.write("\x1b[?1049h") // enter alternate buffer

process.on("exit", () => {
	process.stdout.write("\x1b[?1049l") // leave alternate buffer
})

let width = process.stdout.columns
let height = process.stdout.rows

process.stdout.on('resize', function() {
	width = process.stdout.columns
	height = process.stdout.rows
	
	render ( <Box width={width} height={height}><App /></Box> )
});

render ( <Box width={width} height={height}><App /></Box> )
