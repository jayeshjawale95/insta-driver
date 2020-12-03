import React from 'react';
import { Router } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import history from './history';
import Header from '../components/Header';
import Footer from '../components/Footer';
import routes from '../routes';

const App = () => {
  return (
    <Router history={history}>
      <Container disableGutters maxWidth={false}>
        <Header />
        {routes}
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
