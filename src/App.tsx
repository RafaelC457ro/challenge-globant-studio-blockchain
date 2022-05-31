import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        <h2 className="text-lg">Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about" className="text-lime-600">
          About
        </Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2 className="text-lg ">Who are we?</h2>
        <p>That feels like an existential question, dont you think?</p>
      </main>
      <nav>
        <Link to="/" className="text-lime-600">
          Home
        </Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold underline text-red-700">
          Hello world!
        </h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
