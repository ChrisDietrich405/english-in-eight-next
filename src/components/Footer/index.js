"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Grid, Button, TextField, Container } from "@mui/material";
import * as Validator from "validatorjs";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./styles.module.css";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({});

  
  const validatorObject = {
    name,
    email,
    message,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    try {
      const validator = new Validator(
        validatorObject,
        {
          name: "required",
          email: "required|email",
          message: "required",
        },
        {
          "required.name": "The name field is required",
          "required.email": "The email field is required",
          "required.message": "The message field is required",
        }
      );
      const validate = validator.passes();

      if (validate) {
        var templateParams = {
          email,
          message,
          to_name: "Chris",
        };

        emailjs
          .send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_PUBLIC_ID
          )

          .then(
            (result) => {
              console.log("success");

              toast.success("your message was sent successfully");

              setEmail("");
              setMessage("");
            },
            (error) => {
              console.log(error.text);
            }
          );
        set;
      } else {
        setError(validator.errors.errors);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <ToastContainer />
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              display="flex"
              justifyContent="right"
              flexDirection="column"
              alignItems="center"
            >
              {" "}
              <div className={styles.logo}>
                <Link href="/">
                  <Image
                    className={styles.logo_image}
                    width={300}
                    height={300}
                    src="/images/english-logo.svg"
                    alt="English in Eight Minutes Logo"
                  />
                </Link>
              </div>
              <div className={styles.email}>
                {" "}
                <a href="mailto:englishineight@gmail.com">
                  englishineight@gmail.com
                </a>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={8}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <div className={styles.form_container}>
                <form onSubmit={sendEmail} className={styles.form}>
                  <h3>Contact us</h3>{" "}
                  <div className="mb-3">
                    <label
                      htmlFor="nameControlInput"
                      className="form-label"
                    ></label>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      fullWidth
                      className={styles.form_control}
                      style={{ border: "none" }}
                      size="small"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      InputLabelProps={{
                        style: { padding: ".5px 0 0 5px" },
                      }}
                    />
                    {"name" in error && (
                      <p className={styles.error_message}>
                        {error.name.join(",")}
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="nameControlInput"
                      className="form-label"
                    ></label>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      className={styles.form_control}
                      style={{ border: "none" }}
                      size="small"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      InputLabelProps={{
                        style: { padding: ".5px 0 0 5px" },
                      }}
                    />
                    {"email" in error && (
                      <p className={styles.error_message}>
                        {error.email.join(",")}
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="nameControlInput"
                      className="form-label"
                    ></label>
                    <TextField
                      id="outlined-basic"
                      label="Add a Message"
                      multiline
                      rows={6}
                      variant="outlined"
                      fullWidth
                      className={styles.form_control}
                      style={{ border: "none", marginBottom: "58px" }}
                      size="small"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      InputLabelProps={{
                        style: { padding: ".5px 0 0 5px" },
                      }}
                    />
                    {"message" in error && (
                      <p
                        className={styles.error_message}
                        style={{ marginTop: "55px" }}
                      >
                        {error.message.join(",")}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    variant="contained"
                    className={styles.form_button}
                    style={{ marginTop: "50px" }}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Image
          className={styles.footer_wave}
          width={1400}
          height={91}
          src="/images/v3.png"
          alt="English in Eight Minutes Logo"
        />

      </footer>
    </>
  );
}
