import { useRef } from "react";

import { Container, Form, Button } from "react-bootstrap";

function DoubleUserForm(props) {
  const username1Ref = useRef();
  const username2Ref = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredUsername1 = username1Ref.current.value;
    const enteredUsername2 = username2Ref.current.value;
    props.OnSubmit(enteredUsername1, enteredUsername2);
  }

  return (
    <>
      <Container className="pt-4 text-center" style={{ width: "28rem" }}>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formUsername">
            <Form.Label>CodeChef Usernames</Form.Label>
            <div className="grid grid-cols-2">
              <div className="pr-3">
                <Form.Control
                  type="text"
                  required
                  placeholder="User 1"
                  className="placeholder-gray-600 focus:placeholder-gray-400"
                  ref={username1Ref}
                />
              </div>
              <Form.Control
                type="text"
                required
                placeholder="User 2"
                className="placeholder-gray-600 focus:placeholder-gray-400"
                ref={username2Ref}
              />
            </div>
          </Form.Group>
          <div className="pt-2 pb-2">
            <Button
              variant="primary"
              type="submit"
              className="rounded-full px-3 py-2"
            >
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default DoubleUserForm;
