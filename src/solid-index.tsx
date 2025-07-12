import { render } from 'solid-js/web';
import { Route, Router } from '@solidjs/router';

import './solid-index.css';
import App from './App';
import NotFound from './pages/NotFound';
import Frameworks from './pages/Frameworks';
import Components from './pages/Components';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?'
  );
}

render(
  () => (
    <Router explicitLinks={true} root={App}>
      <Route path="/solid" component={Frameworks} />
      <Route path="/components" component={Components} />
      <Route path="*" component={NotFound} />
    </Router>
  ),
  root!
);
