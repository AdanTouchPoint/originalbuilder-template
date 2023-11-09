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
        <option value={""}></option>
        <option value={"public"}>
        Public: Your submission will be published online with your name
        </option>
        <option value={"Name Withheld"}>
        Name withheld:  Your submission will be published online without your name
        </option>
        <option value={"confidential"}>
        Confidential:  Your submission will not be published online.
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

