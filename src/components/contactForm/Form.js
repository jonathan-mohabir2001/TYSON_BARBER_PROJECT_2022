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
            <div className="form-group">
              <label htmlFor="name"> Last Name</label>
              <input
                type="lastname"
                name="lastname"
                className="form-control"
                id="lastname"
                placeholder="enter your  last name"
              />
            </div>

            {/* <!-- email --> */}
            <div className="form-group">
              <label htmlFor="phone">Phone Number </label>
              <input
                type="tel"
                name="tel"
                className="form-control"
                id="tel"
                placeholder="123-456-7890"
              />
              <small>format 123-456-7890</small>
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
              <label htmlFor="service"> Select one of the following services  </label>

              <select id="service" name="service" className="form-control">
                <option value="haircut"> Adult Haircut - $35.00</option>
                <option value='haircut-full'>Adult Haircut + Beard Trim -$45.00</option>
                <option value="shaves"> Clean Shave - $25.00</option>
                <option value="beard-trim"> Beard-trim $25.00</option>
                <option value='child-haircut'>Child Haircut - $20.00</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="email_body">Message</label>
              <textarea
                className="form-control"
                id="email_body"
                rows="5"
                placeholder="Additional message"
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
