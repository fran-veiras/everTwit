// en components ingresar los componentes importados: 

 ej: import { ButtonStyles as Button } from '../components/styles/buttonComponent';
 components: {Button}

 El archivo ButtonStyles: 
 export const ButtonStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    primary: {
      border: '2px solid',
      borderColor: 'primary',
      color: 'primary',
      transition: 'ease 0.2s',
      _hover: {
        bg: 'tertiary',
      },
    },
  },
  defaultProps: {},
};


// para meter css: 

css={{
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}}