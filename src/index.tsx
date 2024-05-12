import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import RouterComponent from './Routes/Routes';
import { Provider } from 'react-redux'
import store from './Store/store';
import Layout from './Layouts/Layout';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ChakraProvider theme={theme} >
          <Provider store={store}>
            <Layout>
              <RouterComponent/>
            </Layout>
              
            
        </Provider>
      </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
