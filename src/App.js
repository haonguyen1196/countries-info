import { useContext } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import { ThemeContext } from './Components/ThemeContext/themeContext';
import CountryDetail from './Components/MainContent/CountryDetail';
import Footer from './Components/Footer/Footer';

function App() {
  const themeContext = useContext(ThemeContext)
  return (
    <AppContainer className={themeContext.theme}>
      <BrowserRouter>
        <Header/>
        <ContentContainer>
          <Routes>
            <Route exact path='/' element={<MainContent/>}/>
            <Route path='/region/:regionName' element={<MainContent/>}/>           
            <Route path='/search/:name' element={<MainContent/>}/>           
            <Route path='/country/:countryName' element={<CountryDetail/>}/>           
          </Routes>
        </ContentContainer>
        <Footer/>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const ContentContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 12px;
`