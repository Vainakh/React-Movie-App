import React from 'react';
import Header from './elements/Header';
import Home from './Home';
import { Router } from '@reach/router';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
  <>
    <Header/>
    <Home/>
    <GlobalStyle/>
  </>
)

export default App;
