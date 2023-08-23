ReactDOM.render(
  <div>
    <h1 className="header">This is another way of writing react code</h1>
    <p>Let's add a 'P' element</p>
  </div>,
  document.getElementById("root")
);

const page = (
  <div>
    <h2 class="header">This is JSX</h2>
    <p>This is a paragraph</p>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));

console.log(page);

const navbar = (
  <nav className="nav">
    <h1>Bandhan</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

ReactDOM.render(navbar, document.getElementById("root"));
