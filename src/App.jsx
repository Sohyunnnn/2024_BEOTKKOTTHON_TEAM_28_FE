import './styles/heatmap.css';

import { ChakraProvider } from '@chakra-ui/react';
import Router from './routes';
import chakraTheme from './styles/chakraTheme';

function App() {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
