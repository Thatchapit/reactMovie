import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Contact from './components/pages/Contact';

const Routes = (props) => (
    <BrowserRouter {...props}>
      <App>
        <Route path="/:id" component={Contact} />
      </App>
    </BrowserRouter>
);
export default Routes;
