import { useRef, useState } from "react";

import { Container, Form, Button } from "react-bootstrap";

function SingleUserForm(props) {
  const usernameRef = useRef();
  const [UserName, setUserName] = useState(null);
  function submitHandler(event) {
    event.preventDefault();
    //   alert("hello")
    // props.OnSubmit(username);
    const enteredUsername = usernameRef.current.value;
    //console.log(enteredUsername);
    props.OnSubmit(enteredUsername);
    setUserName(enteredUsername);
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
              ref={usernameRef}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      
    </>
  );
}

export default SingleUserForm;
