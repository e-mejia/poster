import Logo from "./images/logo512.png";
import "./App.css";
import Poster from "./components/Poster";

function App() {
  const data = {
    image: { Logo },
    title: "React",
    text: "The best thing since jQuery, probably.",
  };

  return (
    <div className="App">
      <Poster
        image={Logo}
        title={data.title}
        text={data.text}
        alt="React logo"
      />
    </div>
  );
}

export default App;
