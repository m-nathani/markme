import React from 'react';
import { Router, Route } from 'react-router';

import Root from 'container/Root';

export default (history, onUpdate) => (
  <Router history={history} onUpdate={onUpdate}>
    <Route path="/" component={Root}/>
    <Route path="*" component={Root}/>
  </Router>
);
