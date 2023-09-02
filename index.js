const element = (
  <div>
    <h1>hfaidhf</h1>
    <p>welcome</p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));

/*
Running JavaScript in HTML

<body>
  <div id="root"></div>
  <script type="text/javascript">
    const rootElement = document.getElementById("root");
    const element = document.createElement("h1");
    element.textContent = "Hello World!";
    element.classList.add("greeting");
    rootElement.appendChild(element);
  </script>
</body>


<script type="module">
  const elementProps = { className: "greeting", children: "Hello world!" };
  const elementType = "h1";
  const element = React.createElement(elementType, elementProps);
</script>

<body>
  <div id="root"></div>
  <script type="module">
    const elementProps = { className: "greeting", children: "Hello world!" };
    const elementType = "h1";
    const element = React.createElement(elementType, elementProps);
    ReactDOM.render(element, document.getElementById("root"));
  </script>
</body>

const elementProps = { className: "greeting", children: "Hello world!" };
const element = React.createElement("h1", elementProps);

<script type="text/babel">
  const elementProps = { className: "greeting", children: "Hello world!" };
  const element = React.createElement("h1", elementProps);
  const element = <h1 className="greeting">Hello World</h1>;
  ReactDOM.render(element, document.getElementById("root"));
</script>

Embedding variables in JSX:

<body>
  <div id="root"></div>
  <script type="text/babel">
    const name = "Rahul";
    const className = "greeting";
    const element = <h1 className="greeting">Hello World</h1>;
    const element = <h1 className={className}>Hello {name}!</h1>;
    ReactDOM.render(element, document.getElementById("root"));
  </script>
</body>

Embedding Expressions in JSX:

<body>
  <div id="root"></div>
  <script type="text/babel">
    const fullName = (user) => user.firstName + " " + user.lastName;
    const user = { firstName: "Rahul ", lastName: "Attuluri" };
    const element = <h1 className="greeting"> Hello, {fullName(user)}!</h1>;
    ReactDOM.render(element, document.getElementById("root"));
  </script>
</body>

Nesting JSX elements

<body>
  <script type="text/babel">
    const element = (
      <div>
        <h1 className="greeting">Hello!</h1>
        <p>Good to see you here.</p>
      </div>
    );
    ReactDOM.render(element, document.getElementById("root"));
  </script>
</body>

*/
