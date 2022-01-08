import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from 'App';
import './index.css';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'blue.500',
        color: 'gray.800',
      },
    },
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root'),
);
