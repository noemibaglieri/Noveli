import "./App.css";
import NoveliNav from "./components/NoveliNav";
import NoveliFooter from "./components/NoveliFooter";
import Welcome from "./components/Welcome";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <NoveliNav />
      <Container>
        <Welcome />
      </Container>
      <NoveliFooter />
    </>
  );
}

export default App;
