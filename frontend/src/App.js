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
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Link to={'/'}>home</Link>
        <Link to={'/Add/'}></Link>
        <Link to={'/Deposit String/'}></Link>
        <Link to={'/Withdraw String/'}></Link>
        <Link to={"*"}></Link>
      </div>
    </>
  );
}

export default App;
