import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
import { BiErrorCircle } from "react-icons/bi";
init("user_4laRMkYWLgcgxajWsWZft");

function ContactCard(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [statusMessage, setStatusMessage] = useState("Message");
  const [statusMessageClass, setStatusMessageClass] = useState(
    "status-message subHeader"
  );

  const onSubmit = (data) => {
    const form = document.querySelector("#contact-form");
    sendForm("default_service", "template_5xsunfh", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        form.reset();
        setStatusMessage("Message sent!");
        setStatusMessageClass("status-message subHeader success");
        setTimeout(() => {
          setStatusMessageClass("status-message subHeader");
        }, 10000);
      },
      function (error) {
        console.log("FAILED...", error);
        setStatusMessage("Failed to send message! Please try again later.");
        setStatusMessageClass("status-message failure");
        setTimeout(() => {
          setStatusMessageClass("status-message subHeader");
        }, 10000);
      }
    );
  };

  return (
    <div className="brightOuterCont" id="contact">
      <div className="darkInnerContainer">
        <h1 className="header">Contact Me</h1>
        <h2 className="subHeader"></h2>
        <p className={statusMessageClass}>{statusMessage}</p>
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="formField"
            type="text"
            placeholder="Name"
            {...register("user_name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Message must be at least 3 chars long",
              },
            })}
          />
          {errors.user_name && (
            <span className="errorMessage">
              <BiErrorCircle height="100%" style={{ paddingRight: "8px" }} />
              {errors.user_name.message}
            </span>
          )}
          <br />
          <input
            className="formField"
            placeholder="Email"
            {...register("user_email", {
              required: "Email address is required",
              pattern: /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/,
            })}
          />{" "}
          {errors.user_email && (
            <span className="errorMessage">
              <BiErrorCircle height="100%" style={{ paddingRight: "8px" }} />
              Please enter a valid email address
            </span>
          )}
          <br />
          <textarea
            placeholder="Message"
            className="messageArea"
            {...register("message", {
              required: "Please enter a message",
              minLength: {
                value: 15,
                message: "Message must be at least 15 chars long",
              },
            })}
          />
          {errors.message && (
            <span className="errorMessage">
              <BiErrorCircle height="100%" style={{ paddingRight: "8px" }} />
              {errors.message.message}
            </span>
          )}
          <br />
          <input type="submit" value="Send" className="submitButton" />
        </form>
      </div>
    </div>
  );
}

export default ContactCard;
