// MyComponent.jsx
import { Component } from 'solid-js';
import Navbar from './modules/navbar';
import Page from './modules/page';
import Frameworks from './modules/frameworks';

const App: Component = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Page>
        <Frameworks></Frameworks>
      </Page>
    </div>
  );
};

export default App;
