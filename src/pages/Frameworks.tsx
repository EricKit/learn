// MyComponent.jsx
import { Component } from 'solid-js';
import CodeBlock from '../components/CodeBlock';

const Frameworks: Component = () => {
  return (
    <div>
      <h1>Frameworks</h1>
      <p>
        Frameworks were created to take a lot of the busy work of coding websites away. They can do a lot for you such
        as
      </p>
      <ul>
        <li>
          Connect the javascript to your HTML in a single file without referencing elements. This is done in a .jsx
          file. JSX is used by many frameworks including React.
        </li>
        <li>
          Make writing CSS much easier. It can be scoped to a single HTML page to avoid clashing classes or even written
          in your .jsx files.
        </li>
        <li>
          Allows you to easily build templates and embed "components" into pages. For example, you don't need to rewrite
          the navbar on every page. A single page will be made of many components that are self-contained.
        </li>
        <li>
          Handles routing to multiple pages on your website (Look at the URL of this page vs the previous ones, much
          cleaner).
        </li>
        <li>
          Loading is much better. Go back to the old page and watch how it loads when you move pages. Then click between
          pages on this one. It's not actually loading a new page, it's just swapping out components.
        </li>
        <li>Allows reactivity for the page to update on changes easily.</li>
        <li>Lets you easily add other developer's code so you don't have to write it yourself.</li>
      </ul>
      <h2>How a Framework Butts Into your Project</h2>
      <p>
        If you have a SolidJS project and look at the file structure, it's likely a bit intimidating at first. But you
        have already learned the concepts.
      </p>
      <ul>
        <li>
          index.html - It's right there at the root of your project. Just like on your website. There are two things of
          note in the code below. The first `div` has an id of root. The second line loads a script that is the
          index.jsx file.
        </li>

        <CodeBlock
          code={`
    <div id="root"></div>
    <script src="/src/index.jsx" type="module"></script>
    `}
          language="html"
          theme="github-light"
        />
        <li>
          index.tsx - This, and the rest of <b>your</b> code will be in the `src` folder. index.tsx has a line of code
          that you have used before. It's the old `getElementById`. This gets the `div` element from index.html and
          stores it into the variable `root`. The next thing it does is run a function called `render` that accepts this
          variable `root` and tells the framework what to render. In this case, it renders the component `App`. This is
          the launch point for your entire application, and the framework manages it through this injection.
        </li>
        <CodeBlock
          code={`
    const root = document.getElementById('root');
    render(() => <App />, root);
    `}
          language="javascript"
          theme="github-light"
        />
        <li>
          App.jsx - This is just a regular old jsx file. Get used to jsx files, they are used everywhere. React started
          the idea of jsx files and here is their{' '}
          <a href="https://react.dev/learn/writing-markup-with-jsx">explanation</a>.
        </li>
      </ul>
      <h2>The DOM</h2>
      <p>
        Let's dive a little bit more into this `getElementById`. There is a thing called the Docoument Object Model or{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model">
          DOM
        </a>
        . You've already used the DOM. When you wrote `document.getElementById` to get the user value from the input
        element - you were using the DOM. Remember in the variables section we described primitive types? Objects was
        one of them. The `document` above is an object. In the javascript lesson you made your first function for `add`.
        When the add button was clicked, the code inside of the add function executed. `getElementById` is just a
        function. A function attached to an object is called a "method". `getelementbyid` is a method attached to the
        `document` object that lets you manipulate the DOM. Read the short reading in the link in this paragraph. You
        will see the word DOM referenced a lot in documentation. You can just think of it as javascript code connected
        the HTML.
      </p>
    </div>
  );
};

export default Frameworks;
