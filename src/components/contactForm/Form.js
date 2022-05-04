import React from 'react';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_we95mvr',
        'template_93r6dsl',
        form.current,
        'fMCRMwFm2EOTlmTAu'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message received!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col align-self-center">
          <h1 className="text-center">Book Appoitment Below </h1>
          {/* <!-- contact form --> */}
          <form ref={form} onSubmit={sendEmail}>
            {/* <!-- name --> */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="name"
                placeholder="enter your name"
              />
            </div>

            {/* <!-- email --> */}
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="enter your email"
              />
            </div>

            {/* <!-- subject --> */}
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                id="subject"
                placeholder="enter  subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email_body">Message</label>
              <textarea
                className="form-control"
                id="email_body"
                rows="5"
                placeholder="Enter the service you want ,phone number, as well as time and date of appoitment"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
