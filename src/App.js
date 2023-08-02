import { createGlobalStyle } from 'styled-components';
import './App.css';
import Template from './Components/Template';
import Header from './Components/Header';

function App() {
  const GlobalStyle = createGlobalStyle`
    body{
      background-color: aqua;
      border: 1px solid #000;
    }
  `;
  return (
    <>
      <Header></Header>
      <GlobalStyle/>
      <Template>하이</Template>
    </>
  );
}

export default App;
