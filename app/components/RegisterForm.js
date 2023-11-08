import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";
import Alert from "react-bootstrap/Alert";
import { Link, animateScroll as scroll } from "react-scroll";
import StateField from "./StateField";
import PrivacyField from "./PrivacyField";

const RegisterForm = ({
  states,
  setShowQuestions,
  showQuestions,
  dataUser,
  setDataUser,
  hidden,
  mainData,
  senator,
}) => {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);
  const [tac, setTac] = useState(false);
  const formFields = mainData.formFields;
  const handleTerms = (e) => {
    if (e.target.checked === true) {
      const { subject } = senator;
      setDataUser({
        ...dataUser,
        subject: subject,
      });
      setTac(true);
    } else {
      setTac(false);
    }
  };
  const handleChange = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };
  const fieldValidator = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValidEmail = (email) => {
      return emailRegex.test(email);
    };
    for (let key in dataUser) {
      let value = dataUser[key];
      if (value === "") return false;
      if (key === "emailUser") {
        let value = dataUser[key];
        if (isValidEmail(value) === false) return false;
      }
    }
  };
  const click = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    if (
      fieldValidator() === false ||
      tac === false ||
      Object.getOwnPropertyNames(dataUser).length === 0 ||
      dataUser.userName === undefined ||
      dataUser.emailUser === undefined
    ) {
      setError(true);
      return;
    }
    setError(false);
    setShowQuestions(false);
    scroll.scrollToBottom();
  };
  return (
    <div
      hidden={hidden}
      className={"container"}
      style={{ justifyContent: "center", display: "flex" }}
    >
      <div style={{ maxWidth: "700px", width: "100%", paddingTop: "15px" }}>
        {error ? (
          <Alert variant={"danger"}>
            Fill all fields or type correct email{" "}
          </Alert>
        ) : null}
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        ></Link>
        <Form noValidate validated={validated}>
          {formFields.map((field, key) => {
            return field.type !== "state" ? (
              field.type === "privacyType" ? (
                <PrivacyField dataUser={dataUser} setDataUser={setDataUser} />
              ) : (
                <Form.Group className="field" key={key}>
                  <Form.Control
                    id="emailInput-mainForm"
                    type={field.type !== "age" ? "text" : "number"}
                    placeholder={field.placeholder}
                    name={field.type === "name" ? "userName" : field.type}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              )
            ) : (
              <StateField
                setDataUser={setDataUser}
                dataUser={dataUser}
                states={states}
              />
            );
          })}
          <Form.Group
            style={{ textAlign: "justify", padding: "15px" }}
            controlId="conditions"
          >
            <Form.Check
              name="conditions"
              onClick={handleTerms}
              required
              label={
                <a
                  target={"_blank"}
                  rel={"noreferrer"}
                  href={mainData.termsAndConditionsURL}
                >
                  {mainData.termsAndConditionsTxt}
                </a>
              }
            />
          </Form.Group>
          <Form.Group>
            <Button size={"lg"} onClick={click} className={"u-full-width"}>
              Save
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
export default RegisterForm;
