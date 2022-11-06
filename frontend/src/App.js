import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { BrowserRouter, Link, Route } from "react-router-dom";
import {NotFound} from "./NotFound"

function App() {
  return (
    <BrowserRouter>
      
      <Route>
        <NotFound/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
