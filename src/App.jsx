import "./App.css";
import NoveliNav from "./components/NoveliNav";
import NoveliFooter from "./components/NoveliFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";
// import fantasy from "./data/fantasy.json";

function App() {
  return (
    <>
      <NoveliNav />
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList />
      </Container>
      <NoveliFooter />
    </>
  );
}

export default App;
