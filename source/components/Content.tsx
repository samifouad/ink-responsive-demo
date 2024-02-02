import React from 'react'
import { Box, Text, useFocus, useApp, useInput } from 'ink'

export default function Content() {
    const {isFocused} = useFocus()
	const { exit } = useApp()

	useInput((input, key) => {
	  if (input === "q" || key.escape) {
		exit()
	  }
	})

    return (
        <Box 
            borderStyle={isFocused ? 'bold' : 'single'} 
            borderColor={isFocused ? 'white' : 'grey'} 
            width="70%" 
            minHeight={15}
            height="100%"
        >
            <Text>{isFocused ? 'I am focused' : 'I am not focused'}</Text>
        </Box>
    )
}