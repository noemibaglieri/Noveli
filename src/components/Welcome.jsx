import { Alert } from "react-bootstrap";

const Welcome = () => {
  return (
    <Alert variant="info" className="mt-4 mb-4">
      <Alert.Heading>Welcome to our bookshop!</Alert.Heading>
      <p>
        So glad to see you here! You've just stepped into a world of stories, adventures, and knowledge. This little message is just the beginning of your
        journey through shelves full of wonders.
      </p>
      <hr />
      <p className="mb-0">Remember: every book is a new universe. Happy exploring!</p>
    </Alert>
  );
};

export default Welcome;
