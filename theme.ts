// 1. import `extendTheme` function
import { extendTheme, useColorModeValue, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
    cssVarPrefix: 'ardileo',
    initialColorMode: 'system',
    disableTransitionOnChange: false,
}

const colors = {
    gray: {
        // bg: 'red',
    },
}

const components = {
    Modal: {
        baseStyle: (props: any) => ({
            dialog: {
                bg: useColorModeValue('gray.100', 'gray.800')
            }
        })
    }
}

// 3. extend the theme
const theme = extendTheme({ config }, { colors }, { components })

export default theme