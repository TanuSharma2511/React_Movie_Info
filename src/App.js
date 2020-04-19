import React from 'react';
import {Form} from "./Form";
import {Element} from "./Element";
import { GlobalProvider } from './context';

import './App.css';

function App() {
  return (
    <GlobalProvider>
   <Form />
   <Element />
   </GlobalProvider>
  );
}

export default App;
