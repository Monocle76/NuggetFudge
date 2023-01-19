import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import { Route, Switch } from 'wouter';
import About from './pages/About';
import Greet from './pages/Greet';
import NotFound from './pages/404';
import Header from './components/Header';
import Container from './components/Container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
      <Header />
      <Switch>
        <Route path="/"><App /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/greet/:name">{params => <Greet name={params.name} />}</Route>
        <Route><NotFound /></Route>
      </Switch>
    </Container>
  </React.StrictMode>
);
