import React, { Fragment } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const StateField = ({setDataUser, dataUser, states}) => {
    const handleChange = (e) => {
        setDataUser({
          ...dataUser,
          [e.target.name]: e.target.value,
        });
      };
return (
    <Form.Group controlId="submissionType">
    <InputGroup className="mb-2">
    <InputGroup.Text>State</InputGroup.Text>
      <Form.Control
        as="select"
        name="state"
        onChange={handleChange}
        required
      >
        <option></option>
       {
       states.map((state,key) => {
         return <option key={key}> {state} </option>
       }) 
       }
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        Please choose your State
      </Form.Control.Feedback>
    </InputGroup>
  </Form.Group>
)
}

export default StateField

