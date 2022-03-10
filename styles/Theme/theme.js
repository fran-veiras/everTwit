import { extendTheme } from '@chakra-ui/react'
import { ContainerComponent as Container } from '../../Components/Styles/ContainerStyles'
import { HeadingComponent as Heading } from '../../Components/Styles/HeadingStyles'
import { TextComponent as Text } from '../../Components/Styles/TextStyles'
import { ButtonStyles as Button } from '../../Components/Styles/ButtonStyles'

export const themeApp = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  colors: {
    primary: '#00887A',
    secondary: '#FFCCBC',
    white: '#fff',
    lightBlue: '#D3E3FC',
    blue: '#77A6F7',
    black: '#000',
    gray: '#EDF2F7'
  },
  components: {
    Container,
    Heading,
    Text,
    Button
  }
})
