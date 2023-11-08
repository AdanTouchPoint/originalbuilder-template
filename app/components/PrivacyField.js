import React, { Fragment } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const PrivacyField = ({setDataUser, dataUser }) => {
    const handleChange = (e) => {
        setDataUser({
          ...dataUser,
          [e.target.name]: e.target.value,
        });
      };
return (
    <Form.Group controlId="submissionType">
    <InputGroup className="mb-2">
    <InputGroup.Text>Do You Want Your Submission</InputGroup.Text>
      <Form.Control
        as="select"
        name="submissionType"
        onChange={handleChange}
        required
      >
        <option>
          Public: the material is published on the internet whit your
          name
        </option>
        <option>
          Name-whith held: the material is published on the inter
          without your name
        </option>
        <option>
          Confidential: the material is not published onn the internet
          and kept confidential by the Committee
        </option>
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        Please choose a Type of Submission.
      </Form.Control.Feedback>
    </InputGroup>
  </Form.Group>
)
}

export default PrivacyField

