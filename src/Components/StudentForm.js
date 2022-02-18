import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const StudentForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Rquired"),
    email: Yup.string()
      .email("You have enter an invalid email address")
      .required("Rquired"),
    rollno: Yup.number()
      .positive("Invalid roll number")
      .integer("Invalid roll number")
      .required("Rquired"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <label> Name:
            <Field name="name" type="text" className="form-control" /></label>
            <ErrorMessage name="name" className="d-block invalid-feedback" component="span"/>
          </FormGroup>
          <FormGroup>
          <label> Email:
            <Field name="email" type="text" className="form-control" />
            <ErrorMessage name="email" className="d-block invalid-feedback" component="span" /></label>
          </FormGroup>
          <FormGroup>
            <label>Enroll Number:
            <Field name="rollno" type="number" className="form-control" /></label>
            <ErrorMessage name="rollno" className="d-block invalid-feedback" component="span" />
          </FormGroup>
          <Button variant="danger" size="lg" block="block" type="submit">{props.children}</Button>
        </Form>
      </Formik>
      <a href="student-list">Return </a>
    </div>
  );
};

export default StudentForm;
