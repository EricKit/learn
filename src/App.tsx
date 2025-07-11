// MyComponent.jsx
import { Component, ParentProps } from 'solid-js';
import Navbar from './modules/navbar';
import Page from './modules/page';

const App: Component<ParentProps> = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <Page>{props.children}</Page>
    </div>
  );
};

export default App;
