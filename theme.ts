// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
    cssVarPrefix: 'ardileo',
    initialColorMode: 'light',
    disableTransitionOnChange: false
}

const colors = {
    gray: {
        bg: 'red',
    },

}

// 3. extend the theme
const theme = extendTheme({ config }, { colors })

export default theme