import { Component } from 'solid-js';
import CodeBlock from '../components/CodeBlock';

const Components: Component = () => {
  return (
    <div>
      <h1>Your First Component</h1>
      <p>
        Let's add our first component. Make a file in the `src` folder called `MyFirstComponent.jsx` and add the
        following code to it.
      </p>

      <CodeBlock
        code={`
import { createSignal } from "solid-js";

function MyFirstComponent() {
  const [first, setFirst] = createSignal(0);
  const [second, setSecond] = createSignal(0);

  return (
    <div>
      <h1>Hello world</h1>
      <input type="button" value={first()} onClick={() => setFirst((prev) => prev + 1)} />
      +
      <input type="button" value={second()} onClick={() => setSecond((prev) => prev + 1)} /> = {first() + second()}
      <br />
    </div>
  );
}

export default MyFirstComponent;

          `}
        language="jsx"
        theme="github-light"
      />
      <p>Let's go over what this component does</p>
      <ul>
        <li>
          createSignal - this creates two variables. The first variable is the accesor, how you get the value. The
          second is called the setter, how you set the value. This notation is necessary for performance. Almost all
          frameworks have a way to specify reactive variables and provide a way to read and set them.
        </li>
        <li>
          first - The first variable is a function to get the value. You get this value by running the function such as
          `first()`
        </li>
        <li>
          setFirst - This is also a function. You set the variable with the simple notation setFirst(10). This would
          make first() return 10. If you want to set the value based on the previous value, you use the provided
          argument like this: setFirst((previousValue =&gt;) previousValue + 1). This is a function inside a function.
          It's okay if that's confusing, the first notation is the one you will use the most.
        </li>
        <li>return - that's the return value of the function. It's just the HTML.</li>
        <li>
          {`{some javascript}`} - This is how you put javascript into your HTML. Everything inside these curly braces is
          valid javascript code.
        </li>
      </ul>
      <p>
        That's it. Every time you click the button, the onClick function runs which increments first or second. The
        result is displayed because of the {`{first() + second()}`} code which adds the values together and displays the
        result.
      </p>
      <h2>Add The Component</h2>
      <p>
        Open up your `App.jsx` file. Remove everything inside the div element and replace it with your new component and
        import your new component. You can put your component anywhere now, it's reusable! Your App.jsx should look like
        this.
      </p>

      <CodeBlock
        code={`
import styles from "./App.module.css";
import MyFirstComponent from "./MyFirstComponent";

function App() {
  return (
    <div class={styles.App}>
      <MyFirstComponent></MyFirstComponent>
    </div>
  );
}

export default App;
          `}
        language="jsx"
        theme="github-light"
      />
      <p>
        Now you can build a navbar component, a base page component, then add components for the content. The base page
        of this website you are reading looks like this, where props.children is the page that is loaded when you click
        the navbar links:
      </p>
      <CodeBlock
        code={`
const App: Component<ParentProps> = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <Page>{props.children}</Page>
    </div>
  );
};
          `}
        language="jsx"
        theme="github-light"
      />
    </div>
  );
};

export default Components;
