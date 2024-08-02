import "./App.css";
import Card from "./Components/Card";
import Hero from "./Components/Hero";
// import Note from "./Context/Note";
import NoteData from "./Context/NoteData";
// npm i ajv --legacy-peer-deps

function App() {
  return (
    <>
      <NoteData>
        <Hero />
        <Card />
      </NoteData>
    </>
  );
}

export default App;
