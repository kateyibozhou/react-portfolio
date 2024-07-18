import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import Header from "./components/Header";
import CaseStudy from "./components/CaseStudy";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage/HomePage";
import './App.css';

function App() {
  document.title = "Yibo Zhou's Portfolio";
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans&family=Fraunces:wght@100..900&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyle />
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/projects" element={<Projects />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/case-study/:id" element={<CaseStudy />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
