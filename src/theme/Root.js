import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'

export default function Root({children}) {
    return <ChakraProvider resetCSS={true}>
        <>{children}</>
    </ChakraProvider>;
}