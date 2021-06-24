import { useRef } from "react";

import { Container, Form, Button } from "react-bootstrap";

function SingleUserForm(props) {
  const usernameRef = useRef();
  // const [Username, setUserName] = useState(null);
  function submitHandler(event) {
    event.preventDefault();
    //alert("well");
    const enteredUsername = usernameRef.current.value;
    //console.log(props.OnSubmit);
    props.OnSubmit(enteredUsername);
   // console.log(enteredUsername);
    //  setUserName(enteredUsername);
  }

  return (
    <>
      <Container className="pt-4 text-center" style={{ width: "28rem" }}> 
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formUsername">
            <Form.Label>CodeChef Username</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter CodeChef Username"
              className="placeholder-gray-600 focus:placeholder-gray-400"
              ref={usernameRef}
            />
          </Form.Group>
          <div className="pt-2 pb-2">
            <Button variant="primary" type="submit" className="rounded-full px-3 py-2">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default SingleUserForm;
