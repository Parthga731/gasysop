import React from "react";
import { useFormik } from "formik";
import { Button, Grid, Paper, TextField } from "@mui/material";

interface MyFormValueType {
  firstName: string;
  lastName: string;
  email: string;
}

const validate = (values: MyFormValueType) => {
  const errors: MyFormValueType = {
    firstName: "",
    lastName: "",
    email: "",
  };

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Paper elevation={3}>
        <Grid
          direction="column"
          alignItems="center"
          justifyContent="center"
          padding={"50px"}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="firstName"
              variant="outlined"
              placeholder="Enter FirstName"
              label="FirstName"
              name="firstName"
              type="text"
              fullWidth
              margin="normal"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}

            <TextField
              id="lastName"
              variant="outlined"
              placeholder="Enter LastName"
              label="lastName"
              name="lastName"
              type="text"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              margin="normal"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}

            <TextField
              id="email"
              variant="outlined"
              placeholder="Enter Email"
              label="Email"
              name="email"
              type="email"
              fullWidth
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              margin="normal"
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <Button
              type="submit"
              variant="contained"
              style={{ margin: "10px" }}>
              Submit
            </Button>
          </form>
        </Grid>
      </Paper>
    </>
  );
};
